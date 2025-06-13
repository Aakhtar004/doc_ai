describe('Basic test setup for Doc AI', () => {
  test('should pass basic arithmetic test', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('should verify server file exists', () => {
    const fs = require('fs');
    expect(fs.existsSync('server.cjs')).toBe(true);
  });

  test('should verify package.json exists', () => {
    const fs = require('fs');
    expect(fs.existsSync('package.json')).toBe(true);
  });

  test('should have correct project name in package.json', () => {
    const packageJson = require('../package.json');
    expect(packageJson.name).toBe('calidadproyecto');
  });

  test('should have required dependencies', () => {
    const packageJson = require('../package.json');
    expect(packageJson.dependencies).toHaveProperty('express');
    expect(packageJson.dependencies).toHaveProperty('@google/generative-ai');
  });
});