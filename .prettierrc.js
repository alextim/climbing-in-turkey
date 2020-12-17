module.exports = {
  // Trailing commas help with git merging and conflict resolution
  trailingComma: 'all',
  // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  semi: true,
  singleQuote: true,
  printWidth: 100,
  endOfLine: 'auto',
  bracketSpacing: true,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
};
