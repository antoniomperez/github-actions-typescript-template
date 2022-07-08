module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: ['<rootDir>/test/**/*test.ts}', '<rootDir>/src/**/*.ts}'],
};
