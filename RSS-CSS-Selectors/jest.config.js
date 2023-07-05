module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      testEnvironment: 'jsdom',
  };
  