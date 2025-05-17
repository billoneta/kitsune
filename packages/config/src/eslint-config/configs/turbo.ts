import type { Linter } from 'eslint';
import { composer } from 'eslint-flat-config-utils';
import eslintPluginTurboRecommended from 'eslint-plugin-turbo';

export default (await composer({
 ...eslintPluginTurboRecommended.configs['flat/recommended'],
 ignores: ['**/*.turbo/*'],
 name: '@billoneta/config/eslint-config/turbo',
})
 .overrideRules({
  '@monorepo-eslint/no-undeclared-env-vars': ['error', { allowList: ['^ENV_[A-Z]+$'] }],
 })
 .renamePlugins({
  '@monorepo-eslint': 'turbo',
 })) as Linter.Config[];
