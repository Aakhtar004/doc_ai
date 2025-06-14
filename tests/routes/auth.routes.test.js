const request = require('supertest');
const express = require('express');
const session = require('express-session');
const authRoutes = require('../../routes/auth'); // Ajusta la ruta
const { usuariosService } = require('../../services/db'); // Para mockear

// Mockear el servicio de usuarios
jest.mock('../../services/db', () => ({
  usuariosService: {
    verificarEmailExiste: jest.fn(),
    crearUsuario: jest.fn(),
    verificarCredenciales: jest.fn(),
    actualizarUsuario: jest.fn(), // Añadir si es necesario para login
  },
  // Mockear otros servicios si authRoutes los usa indirectamente
}));

const app = express();
app.use(express.json());
app.use(session({ secret: 'test-secret', resave: false, saveUninitialized: true }));
app.use('/api/auth', authRoutes);

describe('Rutas de Autenticación API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Prueba 8: Registro exitoso
  test('POST /api/auth/register debería registrar un nuevo usuario', async () => {
    usuariosService.verificarEmailExiste.mockResolvedValue(false);
    usuariosService.crearUsuario.mockResolvedValue({ id: 1, email: 'new@example.com', nombre: 'New User' });

    const response = await request(app)
      .post('/api/auth/register')
      .send({ email: 'new@example.com', password: 'password123', name: 'New User' });
    
    expect(response.statusCode).toBe(201);
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user.email).toBe('new@example.com');
  });

  // Prueba 9: Registro falla si email existe
  test('POST /api/auth/register debería fallar si el email ya existe', async () => {
    usuariosService.verificarEmailExiste.mockResolvedValue(true);

    const response = await request(app)
      .post('/api/auth/register')
      .send({ email: 'existing@example.com', password: 'password123', name: 'Existing User' });
    
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('El email ya está registrado');
  });

  // Prueba 10: Login exitoso
  test('POST /api/auth/login debería iniciar sesión con credenciales válidas', async () => {
    const mockUser = { id: 1, email: 'test@example.com', nombre: 'Test User', contrasena: 'password123', esta_activo: true };
    usuariosService.verificarCredenciales.mockResolvedValue(mockUser);
    usuariosService.actualizarUsuario.mockResolvedValue({}); // Mock para actualizar último login

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user.email).toBe('test@example.com');
    expect(response.headers['set-cookie']).toBeDefined(); // Verifica que se establece una cookie de sesión
  });

  // Prueba 11: Login falla con credenciales inválidas
  test('POST /api/auth/login debería fallar con credenciales inválidas', async () => {
    usuariosService.verificarCredenciales.mockResolvedValue(null);

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', password: 'wrongpassword' });
    
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Credenciales inválidas');
  });
});