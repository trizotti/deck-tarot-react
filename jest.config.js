export default {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
}
