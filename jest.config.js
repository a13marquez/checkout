module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    '\\.png$|.jpg$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  collectCoverage: true,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/enzyme.config.js',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@bit/)',
  ],

};
