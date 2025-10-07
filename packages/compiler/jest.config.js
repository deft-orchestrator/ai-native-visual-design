module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '.*\\.test\\.ts$',
  moduleNameMapper: {
    '^@ecs/(.*)$': '<rootDir>/../ecs/$1',
    '^@compiler/(.*)$': '<rootDir>/$1'
  },
};
