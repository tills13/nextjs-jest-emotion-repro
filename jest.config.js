const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

module.exports = createJestConfig({
  setupFiles: ["<rootDir>/setup-tests.js"],
  snapshotSerializers: ["@emotion/jest/enzyme-serializer"],
  testEnvironment: "jest-environment-jsdom",
});
