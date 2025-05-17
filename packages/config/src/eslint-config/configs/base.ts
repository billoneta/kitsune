import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';
import importPluginX from 'eslint-plugin-import-x';
import globals from 'globals';

export default [
 gitignore({
  name: '@billoneta/config/eslint-config/gitignore',
 }),
 {
  name: '@billoneta/config/eslint-config/base',
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.mjs'],
  ...js.configs.recommended,
  languageOptions: {
   ecmaVersion: 'latest',
   globals: {
    ...globals.es2021,
    ...globals.es2025,
    ...globals.commonjs,
    ...globals.node,
    ...globals.nodeBuiltin,
   },
   sourceType: 'module',
   parserOptions: {
    ecmaFeatures: {
     jsx: true,
    },
   },
  },
  rules: {
   // Prefer the spread syntax over Object.assign with an object literal as the first argument
   'prefer-object-spread': 'error',

   // Encourage destructuring assignments for clarity
   'prefer-destructuring': 'error',

   // Prevent 'var' declaration, use let or const instead
   'no-label-var': 'error',

   // Avoid undeclared variables, unless they are defined globally
   'no-undef': 'error',

   // Avoid using alert, confirm, or prompt in code
   'no-alert': 'warn',

   // Ensure 'await' is used only inside async functions
   'require-await': 'error',

   // Enforce meaningful function names, but allow anonymous functions when necessary
   'func-names': ['error', 'as-needed'],

   // Always use 'const' for variables that are never reassigned
   'prefer-const': 'error',

   // Enforce shorthand syntax for object properties where possible
   'object-shorthand': ['error', 'always'],

   // Avoid unnecessary 'if' statements without a proper structure
   'no-lonely-if': 'error',

   // Discourage usage of Object constructor without arguments
   'no-object-constructor': 'error',

   // Always enforce return statements in array method callbacks
   'array-callback-return': 'error',

   // Avoid empty statements which are considered bad practice
   'no-empty': 'error',

   // Ensure 'typeof' checks are done with valid strings
   'valid-typeof': ['error', { requireStringLiterals: true }],

   // Prevent use of the Unicode Byte Order Mark (BOM)
   'unicode-bom': ['error', 'never'],

   // Disallow the use of eval() to avoid security risks
   'no-eval': 'error',

   // Warn when cyclomatic complexity exceeds 50
   complexity: ['warn', 50],

   // Prevent Yoda conditions where the literal is on the left side
   yoda: 'error',

   // Prevent the use of variables before declaring them
   'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

   // Ensure consistent use of camelCase, with some exceptions for destructuring
   camelcase: ['warn', { properties: 'never', ignoreDestructuring: true }],

   // Warn about unused variables, ignoring those starting with '_'
   'no-unused-vars': [
    'warn',
    {
     argsIgnorePattern: '^_',
     varsIgnorePattern: '^_',
     caughtErrorsIgnorePattern: '^_',
     destructuredArrayIgnorePattern: '^_',
    },
   ],
  },
 },
 {
  name: '@billoneta/config/eslint-config/base/import',
  plugins: {
   'import-x': importPluginX,
  },
  rules: {
   // Enforce consistent ordering of imports, grouped by their type
   'import-x/order': [
    'warn',
    {
     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
     'newlines-between': 'never',
     alphabetize: {
      order: 'asc',
      caseInsensitive: true,
     },
    },
   ],
  },
 },
 {
  name: '@billoneta/config/eslint-config/base/stylistic',
  plugins: {
   '@stylistic': stylistic,
  },
  rules: {
   // Ensure no spaces inside parentheses for consistent style
   '@stylistic/space-in-parens': ['error', 'never'],

   // No spaces inside array brackets
   '@stylistic/array-bracket-spacing': ['error', 'never'],

   // Ensure consistent spacing inside template literals
   '@stylistic/template-curly-spacing': ['error', 'never'],

   // Ensure consistent spacing around commas in object literals and arrays
   '@stylistic/comma-spacing': 'error',

   // Consistent spacing before and after keywords for a cleaner code
   '@stylistic/keyword-spacing': 'error',

   // Maintain consistent spacing around operators for clarity
   '@stylistic/space-infix-ops': 'error',

   // Consistent spacing before and after unary operators
   '@stylistic/space-unary-ops': 'error',

   // Standardize brace style for code blocks to improve readability
   '@stylistic/brace-style': 'error',

   // Maintain consistent spacing inside computed properties
   '@stylistic/computed-property-spacing': ['error', 'never'],

   // Require quotes around object literal property names when necessary
   '@stylistic/quote-props': ['error', 'as-needed'],

   // Disallow semicolons when they are not required
   '@stylistic/no-extra-semi': 'error',

   // Prefer double quotes for JSX attributes for better readability
   '@stylistic/jsx-quotes': ['error', 'prefer-double'],

   // Enforce consistent line breaks using Unix style
   '@stylistic/linebreak-style': ['error', 'unix'],

   // Require the use of double quotes for strings, improving uniformity
   '@stylistic/quotes': ['error', 'double'],

   // Ensure semicolons are used at the end of statements for consistency
   '@stylistic/semi': ['warn', 'always'],

   // Enforce spacing around blocks for better readability
   '@stylistic/block-spacing': 'error',

   // Enforce consistent spacing inside curly braces
   '@stylistic/object-curly-spacing': ['error', 'always'],

   // Maintain uniform spacing before function parentheses
   '@stylistic/space-before-function-paren': [
    'error',
    {
     anonymous: 'never',
     named: 'never',
     asyncArrow: 'always',
    },
   ],

   // Enforce trailing commas in multiline statements for better version control diffs
   '@stylistic/comma-dangle': [
    'error',
    {
     arrays: 'always-multiline',
     objects: 'always-multiline',
     imports: 'always-multiline',
     exports: 'always-multiline',
     functions: 'never',
    },
   ],
  },
 },
] as Linter.Config[];
