/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    // tsconfig.json을 읽을 수 있게 해줌
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
