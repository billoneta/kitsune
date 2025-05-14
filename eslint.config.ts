import eslintConfig from '@k4i/config/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
 // prettier
 eslintConfig.base,
 eslintConfig.node,
 eslintConfig.typescript,
 eslintConfig.prettier,
 eslintConfig.turbo,
 eslintConfig.next,
 eslintConfig.react,
 globalIgnores(['packages/**/**/**/*.cjs'], 'Ignore any coomon js files'),
 {
  name: 'Override',
  rules: {
   'require-await': 'off',
  },
 },
]);
