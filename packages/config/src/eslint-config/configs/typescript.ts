import type { Linter } from 'eslint';
import { composer, mergeConfigs } from 'eslint-flat-config-utils';
import tseslint from 'typescript-eslint';

const mergedTypescriptConfig = mergeConfigs(...(tseslint.config(tseslint.configs.recommended, tseslint.configs.eslintRecommended) as unknown as Linter.Config[]));

export default (await composer(mergedTypescriptConfig)
 .override('typescript-eslint/eslint-recommended', {
  name: '@k4i/config/eslint-config/typescript',
 })
 .overrideRules({
  '@typescript-eslint/no-unused-vars': [
   'error',
   {
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
   },
  ],
 })
 .renamePlugins({
  '@typescript-eslint': 'typescript',
 })) as Linter.Config[];
