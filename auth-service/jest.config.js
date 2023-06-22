module.exports = {
  setupFiles: ['<rootDir>/test/setEnvVars.js'],
  silent: false,
  moduleFileExtensions: ['js', 'ts'],
  rootDir: '.',
  testRegex: '[.](spec|test).ts',
  // restoreMocks: true,
  // collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "./coverage",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
  roots: ['<rootDir>/']
};