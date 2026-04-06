// @ts-check

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  perfectionist.configs['recommended-natural'],
  {
    settings: {
      react: { version: '19.0' },
    },
  },
  {
    rules: {
      'perfectionist/sort-interfaces': ['error', { partitionByNewLine: true }],
      'perfectionist/sort-intersection-types': ['error', { type: 'line-length' }],
      'perfectionist/sort-maps': ['error', { partitionByNewLine: true }],
      'perfectionist/sort-object-types': ['error', { partitionByNewLine: true }],
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],
      'perfectionist/sort-sets': ['error', { partitionByNewLine: true }],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
