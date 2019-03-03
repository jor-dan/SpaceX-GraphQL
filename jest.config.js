module.exports = {
  verbose: true,
  collectCoverage: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/test/jest.setup.js',
  ],
};
