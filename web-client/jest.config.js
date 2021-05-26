module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/*.test.{j,t}s'],
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
}
