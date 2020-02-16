module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/index.ts'],
  coverageReporters: ['json', 'lcov', 'text'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
};
