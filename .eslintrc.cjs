module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.app.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', '*.config.js'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // не нужен в проектах на Vite/Next
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // разрешает аргументы, начинающиеся с _, даже если они не используются
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
}
