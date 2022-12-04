

export default {
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
