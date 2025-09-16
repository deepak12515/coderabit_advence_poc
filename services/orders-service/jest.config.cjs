// services/orders-service/jest.config.cjs
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    }
  };
  