module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/infra/db/migrations/**.ts',
    '!<rootDir>/src/infra/db/entities/base-entity/**.ts',
    '!<rootDir>/src/infra/db/config/**.ts',
    '!<rootDir>/src/docs/swagger/**.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/modules/app/app.module.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
