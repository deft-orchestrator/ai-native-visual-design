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
    '^@compiler/(.*)$': '<rootDir>/../compiler/$1',
    '^@agents-specialized/(.*)$': '<rootDir>/../agents-specialized/$1',
    '^@agents-strategy/(.*)$': '<rootDir>/$1'
  },
};
