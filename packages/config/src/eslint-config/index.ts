import { Linter } from 'eslint';
import baseConfig from '@/eslint-config/configs/base';
import nextConfig from '@/eslint-config/configs/next';
import nodeConfig from '@/eslint-config/configs/node';
import prettierConfig from '@/eslint-config/configs/prettier';
import reactConfig from '@/eslint-config/configs/react';
import turboConfig from '@/eslint-config/configs/turbo';
import typescriptConfig from '@/eslint-config/configs/typescript';

type Configs = {
 [K in 'base' | 'next' | 'node' | 'prettier' | 'react' | 'turbo' | 'typescript']: Linter.Config[];
};

const eslintConfigs: Configs = {
 base: baseConfig,
 node: nodeConfig,
 turbo: turboConfig,
 next: nextConfig,
 react: reactConfig,
 typescript: typescriptConfig,
 prettier: prettierConfig,
} satisfies Configs;

export default eslintConfigs;
