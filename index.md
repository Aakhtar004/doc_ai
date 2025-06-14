---
layout: default
title: DocAI - Dashboard de Reportes
---

# 📊 DocAI - Dashboard de Reportes de Calidad

Bienvenido al dashboard centralizado de reportes de calidad para el proyecto **DocAI - Generador de documentación impulsado por IA**.

## 📈 Estado General del Proyecto

| Métrica | Estado | Objetivo | Última Actualización |
|---------|--------|----------|---------------------|
| Cobertura de Código | ![Coverage](https://img.shields.io/badge/coverage-%3E70%25-brightgreen) | ≥ 70% | {timestamp} |
| Pruebas de Mutación | ![Mutation](https://img.shields.io/badge/mutation-score-blue) | > 60% | {timestamp} |
| Análisis de Seguridad | ![Security](https://img.shields.io/badge/security-scan-green) | 0 Critical | {timestamp} |
| Calidad de Código | ![Quality](https://img.shields.io/badge/sonar-quality-brightgreen) | A Rating | {timestamp} |

---

## 🎯 Reportes de Análisis

### 📊 Cobertura de Código
> **Objetivo:** Mantener cobertura ≥ 70%

- 📄 [Reporte HTML Completo](reports/coverage/index.html)
- 📊 [Métricas Detalladas](reports/coverage/coverage-summary.json)
- 📈 [Tendencias de Cobertura](reports/coverage/coverage-trends.html)

### 🛡️ Análisis de Seguridad

#### Snyk - Vulnerabilidades
- 🔍 [Reporte de Dependencias](reports/security/snyk-dependencies.json)
- 💻 [Análisis de Código](reports/security/snyk-code.json)
- 📋 [Resumen de Vulnerabilidades](reports/security/snyk-summary.html)

#### Semgrep - Análisis Estático  
- 🔎 [Reporte Detallado](reports/security/semgrep-report.json)
- 📊 [Dashboard de Seguridad](reports/security/semgrep-dashboard.html)

### 🧬 Pruebas de Mutación
> **Objetivo:** Score > 60% para asegurar calidad de tests

- 🎯 [Reporte Principal](reports/mutation/index.html)
- 📊 [Métricas JSON](reports/mutation/mutation-report.json)
- 📈 [Análisis de Mutantes](reports/mutation/mutants-analysis.html)

### 🧪 Pruebas BDD y Funcionales
> **Objetivo:** 15+ escenarios cubriendo unitarias, integración e interfaz

- 🥒 [Reporte BDD/Cucumber](reports/bdd/index.html)
- 📊 [Resumen de Escenarios](reports/bdd/scenarios-summary.json)
- 🔄 [Pruebas de Integración](reports/bdd/integration-tests.html)
- 🎨 [Pruebas de Interfaz](reports/bdd/ui-tests.html)

### 🎯 Calidad de Código - SonarCloud
- 🏆 [Dashboard Principal](https://sonarcloud.io/project/overview?id=doc-ai-sc_doc-ai-py)
- 📊 [Métricas de Calidad](reports/sonar/quality-metrics.json)
- 🐛 [Issues y Code Smells](reports/sonar/issues-report.html)

---

## 📚 Información del Proyecto

### 🏗️ Arquitectura
- **Backend:** Node.js + Express.js
- **Frontend:** HTML/CSS/JavaScript
- **Base de Datos:** Supabase PostgreSQL  
- **IA:** Google Gemini API
- **Despliegue:** GitHub Pages + Heroku

### 🔧 Herramientas de Calidad
- **Testing:** Jest (Unitarias + Cobertura)
- **BDD:** Cucumber.js
- **Mutación:** Stryker
- **Seguridad:** Snyk + Semgrep
- **Calidad:** SonarCloud + ESLint

### 📊 Métricas de CI/CD
- **Workflows Activos:** 5
- **Frecuencia de Análisis:** En cada push
- **Retención de Reportes:** 30 días
- **Tiempo Promedio de Build:** ~5 minutos

---

## 🔗 Enlaces Rápidos

- 📁 [Repositorio GitHub](https://github.com/Aakhtar004/doc_ai)
- 🚀 [GitHub Actions](https://github.com/Aakhtar004/doc_ai/actions)
- 🔐 [GitHub Security](https://github.com/Aakhtar004/doc_ai/security)
- 📋 [Issues](https://github.com/Aakhtar004/doc_ai/issues)
- 📖 [Documentación](https://github.com/Aakhtar004/doc_ai/tree/main/Documents)

---

## 📞 Contacto y Soporte

**Equipo DevStar Solutions:**
- Ahmed Hasan Akhtar Oviedo - *Project Lead*
- Carlos Daniel Ayala Ramos - *Backend Developer*  
- Walter Emmanuel Salas Jiménez - *DevOps Engineer*
- Bruno Enrique Ancco Suaña - *Frontend Developer*

---

*Dashboard generado automáticamente por GitHub Actions • Última actualización: {timestamp}*
