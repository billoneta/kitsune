import type { Linter } from 'eslint';
import { composer } from 'eslint-flat-config-utils';
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended';

export default (await composer({
 ...prettierRecommendedConfig,
 name: '@k4i/config/eslint-config/prettier',
})) as Linter.Config[];
