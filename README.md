[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/c_xOAv9g)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19547133)

[![Infracost CI](https://github.com/UPT-FAING-EPIS/proyecto-si784-2025-i-u2-documentos-ia/actions/workflows/infracost.yml/badge.svg)](https://github.com/UPT-FAING-EPIS/proyecto-si784-2025-i-u2-documentos-ia/actions/workflows/infracost.yml)
# 📄✨ Proyecto Generador de Documentación Impulsado por IA (GDI-IA)

## 🔹 1. Descripción del Proyecto

Este proyecto tiene como objetivo diseñar e implementar una 🌐 plataforma web capaz de ayudar a completar documentos estructurados de manera automática, utilizando diversas 🤖 IAs especializadas en redacción, análisis de contenido y generación de referencias. La solución permitirá a los usuarios completar los documentos en poco tiempo siguiendo formatos predefinidos, reduciendo el esfuerzo manual ✍️ y asegurando la coherencia y calidad del contenido.

## ❓ Preguntas Claves

### 1. Problemática

Actualmente, la elaboración de documentos técnicos y académicos implica un proceso manual que consume tiempo ⏳, requiere conocimientos específicos 📚 y suele estar sujeto a errores de formato y redacción. Esta situación genera inconsistencias en el contenido 📄❌, dificulta el cumplimiento de estructuras predefinidas y limita la productividad de estudiantes, desarrolladores y profesionales que necesitan generar documentación clara, coherente y reutilizable en plazos cortos 🚀.

### 2. Alcance

El sistema abarca:

- ✏️ Ayuda automatizada para completar documentos en formatos estandarizados (FD01-FD06).
- 📝 Un módulo de captura de datos donde el usuario ingresará información clave.
- 🧠 Integración de IAs para procesar y generar contenido por secciones.
- 📄 Generación de documentos en formatos PDF.
- 📂 Almacenamiento y gestión de documentos generados.

**⚠️ El sistema no incluye la edición manual posterior al documento generado dentro de la plataforma.**

### 3. Limitaciones y posibles implementaciones

- 🔗 El sistema dependerá de la disponibilidad de servicios de IA externos, como OpenAI y otros proveedores de APIs.
- 🚫 La plataforma no ofrecerá edición manual posterior a los documentos generados.
- 🌟 Como posible mejora futura, se podría incluir un editor visual para realizar cambios antes de exportar el documento.

## 🎯 Objetivo del Proyecto

Automatizar la creación de documentos formales siguiendo formatos estandarizados, reduciendo el esfuerzo manual y asegurando la calidad del contenido ✅. La solución debe ser confiable y fácil de usar,  para estudiantes, desarrolladores y profesionales que necesiten generar documentación técnica o académica 📚🖥️.

## 🔹 2. Tecnologías y herramientas usadas

- **🛠️ Lenguajes principales:** PHP, MySQL
- **🎨 Frontend:** HTML5, CSS3, JavaScript
- **🧩 Librerías adicionales:** (pendiente a integrar en fases futuras)
- **📡 APIs externas:** OpenAI (GPT), Hugging Face
- **🌐 Servidor Web:** Apache
- **🔄 Control de versiones:** Git / GitHub
- **🛠️ Otras herramientas:**
  - PhpMyAdmin para la administración de base de datos o MySQL
  - Composer (opcional para manejo de dependencias futuras)

## 🔹 3. Requisitos del sistema

- **🖥️ Servidor Web:** Apache 2.4
- **⚙️ PHP:** Versión 8.1 o superior
  - Extensiones requeridas:
    - `pdo_mysql`
    - `mbstring`
    - `curl`
    - `openssl`
    - `json`
- **🗃️ MySQL:** 5.7 o superior
- **🖥️ Sistema operativo del servidor:** Windows / Linux / macOS
- **🌐 Acceso a Internet:** Para consumir APIs de IA
- **🛠️ Editor sugerido:** Visual Studio Code

## 🔹 4. Procedimiento de instalación

1. **📥 Clonar el repositorio:**

Utilizar Git Bash o CMD:

```bash
git clone https://github.com/UPT-FAING-EPIS/proyecto-si784-2025-i-u1-aas.git
```

2. **🔧 Instalar Apache, PHP y MySQL:**

Se recomienda instalar [XAMPP](https://www.apachefriends.org/es/index.html).

3. **📁 Mover el proyecto:**

Copiar la carpeta `proyecto-si784-2025-i-u1-aas` dentro de `C:\xampp\htdocs\gdi-ia`

4. **🛡️ Configurar permisos:**

No es necesario configurar permisos especiales en Windows.

5. **🗄️ Crear la base de datos:**

Abrir `PhpMyAdmin` desde `http://localhost/phpmyadmin/` y ejecutar:

```sql
CREATE DATABASE db_gdiia;
CREATE USER 'gdiia_user'@'localhost' IDENTIFIED BY 'tu_password_segura';
GRANT ALL PRIVILEGES ON db_gdiia.* TO 'gdiia_user'@'localhost';
FLUSH PRIVILEGES;
```

6. **📤 Importar el esquema de la base de datos:**

En `PhpMyAdmin`, seleccionar `db_gdiia`, ir a Importar y cargar el archivo `bd/db_gdiia.sql`.

7. **🛠️ Configurar la conexión a base de datos en el proyecto:**

Editar `config/conexion.php`:

```php
<?php
$host = "localhost";
$user = "gdiia_user";
$pass = "tu_password_segura";
$dbname = "db_gdiia";
?>
```

8. **🔐 Configurar API keys de servicios de IA** donde corresponda.

9. **🌐 Acceder a la aplicación:**

Desde el navegador: `http://localhost/gdi-ia/`

## 🔹 5. Configuración del proyecto

- **🔑 Variables de entorno necesarias:**
  - API Key de OpenAI.
  - Configuración de acceso a la base de datos.

- **🔒 Sugerencia:** Para mayor seguridad, almacenar claves en variables de entorno o en un archivo `.env` protegido.

## 🔹 6. Comandos principales

- **🚀 Iniciar Apache y MySQL en Windows (XAMPP):**

Abrir el panel de control de XAMPP y dar clic en `Start` en Apache y MySQL.

- **🔍 Ver estado de Apache y MySQL:**

Desde el panel de XAMPP puedes ver si están en verde (activos).

## 🔹 7. Parámetros o configuraciones especiales

- **🤖 Consumo de APIs de IA:**
  - Se requiere una API Key activa de OpenAI para las funcionalidades de generación automática.

- **📈 Límites configurables:**
  - Se puede establecer un número máximo de documentos generados por usuario en la versión gratuita.

## 🔹 8. Notas adicionales

- ⚠️ Verificar siempre las cuotas de uso de OpenAI para evitar costos inesperados.
- 🔄 Mantener actualizado XAMPP en tu sistema.
- 💾 Se recomienda implementar backups regulares de la base de datos.

# 📚 Créditos

Proyecto desarrollado por 👥:

- **Akhtar Oviedo, Ahmed Hasan** (2022074261)
- **Ayala Ramos, Carlos Daniel** (2022074266)
- **Salas Jiménez, Walter Emmanuel** (2022073896)
- **Ancco Suaña, Bruno Enrique** (2023077472)

Repositorio oficial: [GDI-IA](https://github.com/UPT-FAING-EPIS/proyecto-si784-2025-i-u2-documentos-ia)
