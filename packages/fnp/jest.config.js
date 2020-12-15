module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  automock: false,
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
};
