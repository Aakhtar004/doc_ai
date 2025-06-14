const GeminiService = require('../../services/gemini'); // Ajusta la ruta si es necesario

describe('GeminiService', () => {
    // Prueba 1: Detección de lenguaje
    test('debería detectar el lenguaje correcto basado en la extensión del archivo', () => {
        expect(GeminiService.detectarLenguaje('test.js', '')).toBe('JavaScript');
        expect(GeminiService.detectarLenguaje('test.py', '')).toBe('Python');
        expect(GeminiService.detectarLenguaje('test.java', '')).toBe('Java');
        expect(GeminiService.detectarLenguaje('test.html', '')).toBe('HTML');
        expect(GeminiService.detectarLenguaje('test.css', '')).toBe('CSS');
        expect(GeminiService.detectarLenguaje('test.unknown', '')).toBe('Desconocido');
    });

    // Prueba 2: Cálculo de estadísticas
    test('debería calcular estadísticas básicas del código', () => {
        const codigo = "const a = 1;\n// Esto es un comentario\n\nfunction foo() {}";
        const stats = GeminiService.calcularEstadisticas(codigo);
        expect(stats.total_lineas).toBe(4);
        expect(stats.lineas_codigo).toBe(3); // Líneas no vacías
        expect(stats.lineas_comentarios).toBe(1);
        expect(stats.caracteres).toBe(codigo.length);
    });

    // Prueba 3: Construcción del prompt
    test('debería construir el prompt de análisis correctamente', () => {
        const codigo = "let x = 5;";
        const nombreArchivo = "sample.js";
        const lenguaje = "JavaScript";
        const prompt = GeminiService.construirPromptAnalisis(codigo, nombreArchivo, lenguaje);
        expect(prompt).toContain("**Archivo:** sample.js");
        expect(prompt).toContain("**Lenguaje detectado:** JavaScript");
        expect(prompt).toContain("```JavaScript\nlet x = 5;\n```");
        expect(prompt).toContain("1. **Resumen General:**");
    });
});