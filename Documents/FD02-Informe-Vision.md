**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERÍA**

**Escuela Profesional de Ingeniería de Sistemas**

![Logo](media/logo-upt.png)

**Proyecto** 

**“*Generador de documentación impulsado por IA (GDI-IA)”***

**Informe de Vision**

**Curso:**

*Calidad y Pruebas de Software*


**Docente:** 

*Mag. Patrick Cuadros Quiroga*


**Integrantes:**

- *Akhtar Oviedo, Ahmed Hasan (2022074261)*
- *Ayala Ramos, Carlos Daniel (2022074266)*
- *Salas Jiménez, Walter Emmanuel (2022073896)*
- *Ancco Suaña, Bruno Enrique (2023077472)*


**Tacna – Perú**

**2025**

![Logo1](media/logo1.png) ![Logo2](media/logo2.png)

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|***Versión***|***Hecha por***|***Revisada por***|***Aprobada por***|***Fecha***|***Motivo***|
|1\.0|AHAO, CDAR, WESJ, BEAS|PCQ|-|25/04/2025|Versión 1.0|


## Índice General

1. [Introducción](#1-introducción)
   - [Propósito](#a-propósito)
   - [Alcance](#b-alcance)
   - [Definiciones, Siglas y Abreviaturas](#c-definiciones-siglas-y-abreviaturas)
   - [Referencias](#d-referencias)
   - [Visión General](#e-visión-general)
2. [Posicionamiento](#2-posicionamiento)
   - [Oportunidad de negocio](#a-oportunidad-de-negocio)
   - [Definición del problema](#b-definición-del-problema)
3. [Descripción de los interesados y usuarios](#3-descripción-de-los-interesados-y-usuarios)
   - [Resumen de los interesados](#a-resumen-de-los-interesados)
   - [Resumen de los usuarios](#b-resumen-de-los-usuarios)
   - [Entorno de usuario](#c-entorno-de-usuario)
   - [Perfiles de los interesados](#d-perfiles-de-los-interesados)
   - [Perfiles de los usuarios](#e-perfiles-de-los-usuarios)
   - [Necesidades de los interesados y usuarios](#f-necesidades-de-los-interesados-y-usuarios)
4. [Vista General del Producto](#4-vista-general-del-producto)
   - [Perspectiva del producto](#a-perspectiva-del-producto)
   - [Resumen de capacidades](#b-resumen-de-capacidades)
   - [Suposiciones y dependencias](#c-suposiciones-y-dependencias)
   - [Costos y precios](#d-costos-y-precios)
   - [Licenciamiento e instalación](#e-licenciamiento-e-instalación)
5. [Características del producto](#5-características-del-producto)
6. [Restricciones](#6-restricciones)
7. [Rangos de calidad](#7-rangos-de-calidad)
8. [Precedencia y Prioridad](#8-precedencia-y-prioridad)
9. [Otros requerimientos del producto](#9-otros-requerimientos-del-producto)
   - [Estándares legales](#a-estándares-legales)
   - [Estándares de comunicación](#b-estándares-de-comunicación)
   - [Estándares de cumplimiento de la plataforma](#c-estándares-de-cumplimiento-de-la-plataforma)
   - [Estándares de calidad y seguridad](#d-estándares-de-calidad-y-seguridad)
10. [Conclusiones](#10-conclusiones)
11. [Recomendaciones](#11-recomendaciones)
12. [Webgrafía](#12-webgrafía)


   # 1. Introducción
   ## a. **Propósito**
   El propósito de este proyecto es diseñar e implementar una plataforma web capaz de ayudar a completar documentos estructurados de manera automática, utilizando diversas IAs especializadas en redacción, análisis de contenido y generación de referencias. La solución permitirá a los usuarios a terminar los documentos en poco tiempo siguiendo formatos predefinidos, reduciendo el esfuerzo manual y asegurando la coherencia y calidad del contenido.

   ## b. **Alcance**
   El sistema abarca:
   - Ayuda de manera automatizada en los documentos para formatos estandarizados (FD01-FD06).
   - Un módulo de captura de datos donde el usuario ingresará información clave.
   - La integración de varias IAs para procesar y generar contenido por secciones.
   - La generación de documentos en formatos PDF y DOCX.
   - Almacenamiento y gestión de documentos generados. No incluye la edición manual posterior al documento generado dentro de la plataforma.

   ## c. **Definiciones, Siglas y Abreviaturas**
   - IA: Inteligencia Artificial.
   - MCP: Multi-Component Platform (Plataforma de Múltiples Componentes).
   - FD01-FD06: Formatos documentales estandarizados para proyectos de software.
   - API: Application Programming Interface.
   - PDF/DOCX: Formatos de salida de documentos.

   ## d. **Referencias**
   - Manuales institucionales de formatos documentales.
   - Documentación oficial de OpenAI, Hugging Face y Ollama.
   - Guías de integración API REST con PHP.
   - Buenas prácticas de generación de documentos automatizados.

   ## e. **Visión General**
   El proyecto busca convertirse en una herramienta de ayuda para estudiantes, desarrolladores y profesionales, facilitando la creación de documentos formales mediante una plataforma inteligente, modular y escalable. La visión a largo plazo es integrar más formatos, personalizar plantillas y ofrecer servicios de análisis documental avanzado.
   
   # 2. Posicionamiento
   El sistema GDI-IA se posiciona como una solución innovadora dentro del mercado de automatización documental, enfocándose específicamente en la generación inteligente de documentos técnicos y académicos. Su ventaja competitiva radica en la integración modular de múltiples servicios de inteligencia artificial, lo que le permite adaptarse a distintos formatos y estándares establecidos, superando las limitaciones de herramientas convencionales.
   
   ## a. **Oportunidad de negocio**
   Actualmente, existe una notoria falta de plataformas accesibles que automaticen de forma eficiente la creación de documentos personalizados y estructurados. Esta carencia representa una oportunidad para ofrecer un servicio escalable y flexible dirigido a estudiantes, profesionales independientes, equipos de desarrollo y organizaciones que requieren generar documentación formal de forma frecuente y estandarizada. GDI-IA puede ser adoptado por instituciones educativas, agencias tecnológicas y freelancers que deseen optimizar su flujo de trabajo documental.
   
   ## b. **Definición del problema**
   La elaboración manual de documentos formales es un proceso que consume tiempo, requiere alta atención al detalle y es susceptible a errores de formato, redacción y organización del contenido. No existe actualmente una herramienta que permita, de manera integrada, aprovechar las capacidades de diferentes IAs para automatizar este proceso bajo una misma plataforma, generando así una solución flexible, precisa y adaptable a distintas necesidades documentales.
   
   # 3. Descripción de los interesados y usuarios
   ## a. **Resumen de los interesados**
   Los interesados en el proyecto incluyen directivos de empresas tecnológicas, responsables de áreas académicas, gestores de proyectos, y entidades educativas que buscan optimizar la producción documental. También se consideran partes interesadas los desarrolladores encargados del mantenimiento del sistema y los inversores potenciales.
   
   ## b. **Resumen de los usuarios**
   Los usuarios principales del sistema serán estudiantes universitarios, desarrolladores de software, asistentes de investigación, y profesionales que requieren elaborar documentación técnica o académica siguiendo formatos establecidos. Estos usuarios valoran la rapidez, precisión, facilidad de uso y confiabilidad del sistema.
   
   ## c. **Entorno de usuario**
   El entorno de usuario será una plataforma web accesible desde navegadores modernos, compatible con dispositivos de escritorio y móviles. Requiere conexión a internet y acceso a una cuenta para interactuar con los módulos de generación, edición, descarga y almacenamiento de documentos.
   
   ## d. **Perfiles de los interesados**
   - **Directores de TI**: Interesados en soluciones que mejoren la eficiencia operativa de sus equipos.
   - **Coordinadores académicos**: Buscan herramientas para estandarizar y facilitar la generación de documentos institucionales.
   - **Desarrolladores del sistema**: Interesados en el rendimiento, escalabilidad y mantenimiento de la solución.
   - **Inversionistas o patrocinadores**: Evaluarán el retorno de inversión y la viabilidad comercial del producto.
   
   ## e. **Perfiles de los Usuarios**
   - **Trabajadores de empresas de desarrollo de software:** Necesitan agilizar la producción de documentación del producto software para sus clientes.
   - **Desarrolladores freelance**: Necesitan agilizar la producción de documentación para proyectos.
   - **Asistentes de investigación**: Demandan una herramienta que les permita enfocarse en el contenido, dejando el formato y redacción a la IA.
   - **Profesionales técnicos**: Buscan soluciones eficientes para entregar informes formales sin distracciones operativas.
   
   ## f. **Necesidades de los interesados y usuarios**
   - Generación rápida de documentos estructurados.
   - Reducción de errores en formato, estilo y ortografía.
   - Acceso a plantillas normalizadas y automatización de referencias.
   - Interfaz intuitiva y adaptable.
   - Módulos de IA confiables para redacción y análisis.
   - Control de versiones y almacenamiento en línea.
   - Compatibilidad con diferentes tipos de documentos (PDF, DOCX).

   # 4. Vista General del Producto
   ## a. **Perspectiva del producto**
   El sistema GDI-IA será una plataforma web accesible desde cualquier navegador, desarrollada en PHP con arquitectura modular para facilitar la integración con APIs de Inteligencia Artificial. Utilizará una base de datos MySQL para la gestión eficiente y segura de la información, permitiendo una experiencia dinámica y escalable.
   
   ## b. **Resumen de capacidades**
   - Captura guiada de datos para facilitar la recolección de información del usuario.
   - Generación automática de documentos con base en entradas y plantillas predeterminadas.
   - Historial de documentos accesible para consultas o nuevas versiones.
   - Opciones de descarga en múltiples formatos (PDF, DOCX, etc.).
   
   ## c. **Suposiciones y dependencias**
   - Disponibilidad constante y estable de los servicios externos de IA (como OpenAI).
   - Acceso a internet por parte de los usuarios finales.
   - Aceptación y cumplimiento de términos de uso de las APIs integradas.
   
   ## d. **Costos y precios**
   El proyecto considera como costos principales:
   - Desarrollo e implementación inicial.
   - Consumo de APIs de IA de terceros.
   - Mantenimiento de servidores y bases de datos.
   
   Se ofrecerá un modelo freemium:
   - Plan gratuito con funcionalidades limitadas (documentos mensuales, opciones de formato básicas).
   - Planes premium escalonados según volumen de uso, tipos de documento y acceso a configuraciones avanzadas.
   
   ## e. **Licenciamiento e instalación**
   El sistema se distribuirá bajo un modelo SaaS (Software as a Service), alojado en la nube. No requiere instalación local por parte del usuario.
   Los términos de licencia dependerán del perfil del cliente: usuario individual, empresa o institución educativa.
   
   # 5. Características del producto
   - **Conexión de API’s con servicios de IA:** Se integrarán modelos de lenguaje mediante APIs externas.
   - **Integración con múltiples IAs:** Soporte para diferentes motores de IA según los requerimientos del usuario o el tipo de documento.
   - **Generación conforme a formatos preestablecidos:** Cumplimiento de estructuras estándar de documentos como informes, oficios, propuestas, etc.
   - **Seguridad en el manejo de datos:** Protección de la información mediante cifrado y autenticación por roles.
   
   # 6. Restricciones
   - Dependencia de proveedores de servicios de IA para el procesamiento del lenguaje natural.
   - Limitación en la generación de documentos bajo el plan gratuito.
   - Uso restringido según políticas de uso responsable y límites mensuales.
   
   # 7. Rangos de calidad
   - **Disponibilidad del sistema:** 99% de uptime mensual mínimo garantizado.
   - **Precisión en la generación:** Alta coherencia estructural y gramatical en los documentos generados.
   - **Interfaz de usuario:** Interfaz intuitiva, responsiva, accesible desde dispositivos móviles y de escritorio.
   
   # 8. Precedencia y Prioridad
   - Prioridad alta en el desarrollo de módulos de captura de datos y generación de documentos.
   - La integración con APIs será desarrollada en paralelo con énfasis en la escalabilidad.
   - Funcionalidades como el historial y las descargas se implementarán en fases posteriores.
   
   # 9. Otros requerimientos del producto
   ## a. **Estándares legales**
   Cumplimiento de normativas de protección de datos personales como la GDPR o la Ley de Protección de Datos local.
   
   ## b. **Estándares de comunicación**
   Uso de canales seguros (HTTPS), y encriptación de datos sensibles.
   
   ## c. **Estándares de cumplimiento de la plataforma**
   Soporte para navegadores modernos, accesibilidad (WCAG) y adaptabilidad a diferentes resoluciones.
   
   ## d. **Estándares de calidad y seguridad**
   Pruebas de integración, pruebas de carga y validaciones de seguridad periódicas.
   
   # 10. Conclusiones
   El proyecto “Generador de Documentación Impulsado por IA (GDI-IA)” representa una solución innovadora y práctica para enfrentar los desafíos asociados con la creación de documentos estructurados. A través de una plataforma web modular, escalable y basada en inteligencia artificial, se busca reducir el tiempo y esfuerzo invertido por los usuarios en la elaboración de documentos, garantizando al mismo tiempo coherencia, precisión y cumplimiento de formatos predefinidos.
   
   Gracias a su enfoque automatizado, el sistema no solo agiliza procesos repetitivos, sino que también eleva la calidad del contenido generado. La integración de múltiples servicios de IA, junto con una interfaz intuitiva y capacidades de almacenamiento y exportación, convierten a GDI-IA en una herramienta esencial tanto en entornos académicos como profesionales.
   
   Con una visión a futuro centrada en la expansión funcional y la mejora continua, este proyecto sienta las bases para una nueva forma de gestionar documentación técnica, institucional y administrativa, posicionándose como un recurso clave en el ecosistema digital actual.
   
   # 11. Recomendaciones
   Para garantizar el éxito y sostenibilidad del proyecto “Generador de Documentación Impulsado por IA (GDI-IA)”, se recomienda tener en cuenta los siguientes aspectos:
   1. **Monitoreo constante de los servicios de IA externos**
   Dado que el sistema depende de APIs externas como OpenAI u Ollama, es fundamental mantener una vigilancia continua sobre su disponibilidad, cambios en políticas, tarifas o funcionalidades.
   2. **Políticas claras de uso y protección de datos**
   Implementar medidas de seguridad robustas y cumplir con normativas de protección de datos (como la Ley de Protección de Datos Personales) para generar confianza en los usuarios y proteger la información procesada.
   3. **Capacitación a los usuarios finales**
   Asegurar que los usuarios comprendan el funcionamiento del sistema y sus alcances mediante tutoriales, documentación y asistencia técnica, especialmente en las etapas iniciales de uso.
   4. **Mantenimiento periódico y mejoras continuas**
   Establecer un plan de mantenimiento técnico regular, que incluya la revisión del rendimiento, actualización de librerías y mejoras en la experiencia de usuario.
   5. **Estrategia escalable de infraestructura**
   Diseñar la arquitectura del sistema considerando posibles aumentos en la demanda, incorporando servicios de nube escalables para almacenamiento y procesamiento.
   6. **Pruebas exhaustivas antes del despliegue**
   Realizar pruebas funcionales, de carga y de seguridad para asegurar que el sistema funcione correctamente bajo distintos escenarios y volúmenes de uso.
   7. **Modelo de negocio sostenible**
   Evaluar periódicamente la rentabilidad del sistema y ajustar los planes de precios o características según la retroalimentación del mercado y las necesidades de los usuarios.
   8. **Retroalimentación continua de usuarios**
   Establecer mecanismos de contacto directo con los usuarios para recibir sugerencias, identificar fallos o necesidades no cubiertas, y guiar el desarrollo futuro de la plataforma.
   
   # 12. Webgrafía
   - Informe Final del Proyecto GDI-IA (2025). Sistema Generador de documentación impulsado por IA (GDI-IA). DevStar Solutions.
   - Documento SRS del Proyecto GDI-IA (2025). Sistema Generador de documentación impulsado por IA (GDI-IA). DevStar Solutions.
   - Informe de Factibilidad Proyecto GDI-IA (2025). Sistema Generador de documentación impulsado por IA (GDI-IA). DevStar Solutions.