//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'none',
  bracketSpaceing: true,
  jsxSingleQuote: true,
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  prseWrap: 'always',
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80
      }
    }
  ],
  plugins: ['prettier-plugin-tailwindcss']
};

export default config;
