module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "json"],
  testRunner: "jest",
  jest: {
    projectType: "custom",
    config: {
      testEnvironment: "node",
      passWithNoTests: true,
      testMatch: ["**/tests/**/*.test.js", "**/__tests__/**/*.test.js"]
    }
  },
  coverageAnalysis: "off",
  mutate: [
    "services/**/*.js",
    "routes/**/*.js", 
    "config/**/*.js",
    "public/js/main.js",
    "!**/*.test.js",
    "!**/*.spec.js",
    "!node_modules/**",
    "!coverage/**",
    "!reports/**"
  ],
  htmlReporter: {
    baseDir: "reports/mutation"
  },
  jsonReporter: {
    fileName: "reports/mutation/mutation-report.json"
  },
  thresholds: {
    high: 70,
    low: 60,
    break: null
  },
  timeoutMS: 30000
};