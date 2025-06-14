module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/__tests__/**/*.test.js'
  ],
  collectCoverageFrom: [
    'services/**/*.js',
    'routes/**/*.js',
    'config/**/*.js',
    'public/js/main.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/reports/**'
  ],
  passWithNoTests: true,
  verbose: true
};
  
