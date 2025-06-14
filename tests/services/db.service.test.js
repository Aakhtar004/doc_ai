const { usuariosService, proyectosService, documentosService } = require('../../services/db'); // Ajusta la ruta
const supabase = require('../../config/supabase'); // Ajusta la ruta

// Mockear el cliente Supabase
jest.mock('../../config/supabase', () => ({
  from: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  delete: jest.fn().mockReturnThis(),
  eq: jest.fn().mockReturnThis(),
  single: jest.fn().mockResolvedValue({ data: {}, error: null }),
  order: jest.fn().mockReturnThis(),
}));

describe('Servicios de Base de Datos', () => {
  beforeEach(() => {
    // Limpiar mocks antes de cada prueba
    jest.clearAllMocks();
    // Configurar un mock resuelto por defecto para 'select' y 'insert' que devuelven datos
    supabase.select.mockResolvedValue({ data: [{ id: 1 }], error: null });
    supabase.insert.mockResolvedValue({ data: [{ id: 1 }], error: null });
    supabase.update.mockResolvedValue({ data: [{ id: 1 }], error: null });
    supabase.single.mockResolvedValue({ data: { id: 1 }, error: null });
  });

  // Prueba 4: Crear usuario
  describe('usuariosService', () => {
    test('crearUsuario debería llamar a supabase.insert con los datos correctos', async () => {
      const userData = { email: 'test@example.com', password: 'password123', nombre: 'Test' };
      await usuariosService.crearUsuario(userData);
      expect(supabase.from).toHaveBeenCalledWith('usuarios');
      expect(supabase.insert).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            correo_electronico: userData.email,
            contrasena: userData.password,
            nombre: userData.nombre,
          }),
        ])
      );
      expect(supabase.select).toHaveBeenCalled();
    });

    // Prueba 5: Verificar credenciales
    test('verificarCredenciales debería llamar a supabase.select con email y password', async () => {
      supabase.single.mockResolvedValueOnce({ data: { email: 'test@example.com' }, error: null });
      await usuariosService.verificarCredenciales('test@example.com', 'password123');
      expect(supabase.from).toHaveBeenCalledWith('usuarios');
      expect(supabase.select).toHaveBeenCalledWith('*');
      expect(supabase.eq).toHaveBeenCalledWith('correo_electronico', 'test@example.com');
      expect(supabase.eq).toHaveBeenCalledWith('contrasena', 'password123');
      expect(supabase.eq).toHaveBeenCalledWith('esta_activo', true);
      expect(supabase.single).toHaveBeenCalled();
    });
  });

  // Prueba 6: Crear proyecto
  describe('proyectosService', () => {
    test('crearProyecto debería llamar a supabase.insert con los datos del proyecto', async () => {
      const proyectoData = { usuario_id: 1, nombre_proyecto: 'Mi Proyecto', lenguaje: 'JavaScript' };
      await proyectosService.crearProyecto(proyectoData);
      expect(supabase.from).toHaveBeenCalledWith('proyectos_codigo');
      expect(supabase.insert).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining(proyectoData),
        ])
      );
      expect(supabase.select).toHaveBeenCalled();
    });
  });

  // Prueba 7: Obtener documentos por proyecto
  describe('documentosService', () => {
    test('obtenerDocumentosPorProyecto debería llamar a supabase.select con proyecto_codigo_id', async () => {
      supabase.select.mockResolvedValueOnce({ data: [], error: null });
      await documentosService.obtenerDocumentosPorProyecto(123);
      expect(supabase.from).toHaveBeenCalledWith('documentos_generados');
      expect(supabase.select).toHaveBeenCalledWith('*');
      expect(supabase.eq).toHaveBeenCalledWith('proyecto_codigo_id', 123);
      expect(supabase.order).toHaveBeenCalledWith('generado_en', { ascending: false });
    });
  });
});