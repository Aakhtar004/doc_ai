# 📄 Proyecto: DocAI - Generador de documentación impulsado por IA

Este proyecto es una aplicación web basada en Node.js que integra **Google Gemini API** para procesamiento de texto y **Supabase PostgreSQL** como backend de base de datos. Se utiliza **Express.js** para manejar las rutas del servidor y se incluye una interfaz frontend básica para autenticación y visualización de documentos.

---

## 📁 Estructura del Proyecto

---

## ⚙️ Tecnologías Utilizadas

| Tecnología        | Descripción                                                |
|-------------------|------------------------------------------------------------|
| Node.js           | Entorno de ejecución de JavaScript                        |
| Express.js        | Framework web para Node.js                                |
| Supabase          | Backend como servicio (BaaS) basado en PostgreSQL         |
| Gemini API        | Integración con LLM de Google para manejo de documentos   |
| HTML/CSS/JS       | Interfaz de usuario estática                              |
| GitHub Actions    | CI/CD con Infracost para control de infraestructura       |

---

## 🚀 Instalación y Ejecución Local

### 🔧 Requisitos previos

- Node.js ≥ 18.x  
- Cuenta y proyecto en [Supabase](https://supabase.com/)
- Clave API de [Gemini (Google AI)](https://makersuite.google.com/app)

### 📥 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/aakhtar004-doc_ai.git
cd aakhtar004-doc_ai
```

### 📦 2. Instalar dependencias

```bash
npm install
```

### 🔑 3. Configurar variables de entorno

Crea un archivo `.env` con el siguiente contenido:

```env
SUPABASE_URL=https://tusupabaseurl.supabase.co
SUPABASE_KEY=tu-clave-secreta
GEMINI_API_KEY=tu-api-key-de-gemini
```

> También puedes configurar Supabase desde `config/supabase.js`.

### ▶️ 4. Ejecutar servidor

```bash
node server.cjs
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🛠 Funcionalidades Implementadas

- Autenticación de usuarios (`routes/auth.js`)
- Gestión de proyectos/documentos (`routes/proyectos.js`)
- Procesamiento de texto/documentos usando Gemini (`services/gemini.js`)
- Almacenamiento y recuperación desde Supabase (`services/db.js`)
- CI/CD con GitHub Actions (`.github/workflows/infracost.yml`)

---

## 📄 Documentación Técnica

Se encuentra en el directorio `Documents/` en formatos `.docx` y `.md`. Incluye:

- Informe de factibilidad
- Especificación de requerimientos
- Visión del sistema
- Arquitectura de software
- Propuesta del proyecto final

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

---

## 📝 Licencia

Este proyecto se encuentra bajo la licencia MIT.
