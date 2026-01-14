// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Ignorer les dossiers non pertinents (la plonge)
  {
    ignores: ['node_modules', 'coverage', 'dist'],
  },

  // 2. Configuration recommandée (les standards Michelin)
  js.configs.recommended,

  // 3. Configuration spécifique (Node et Jest)
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node, // Reconnaît 'process', 'console', etc.
        ...globals.jest, // Reconnaît 'test', 'expect', 'describe'
      },
    },
    rules: {
      // Petits ajustements pour que la carte soit parfaite
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];