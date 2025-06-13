module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
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
    "*.js",
    "*.cjs",
    "routes/**/*.js",
    "services/**/*.js",
    "config/**/*.js",
    "!**/*.test.js",
    "!**/*.spec.js",
    "!node_modules/**",
    "!coverage/**",
    "!reports/**"
  ],
  htmlReporter: {
    baseDir: "reports/mutation/html"
  },
  thresholds: {
    high: 80,
    low: 60,
    break: null
  }
};