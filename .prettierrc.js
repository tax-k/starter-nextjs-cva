module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['src/routes/*.ts'],
      options: {
        printWidth: 1000,
      },
    },
  ],
};
