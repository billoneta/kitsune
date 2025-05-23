import eslintConfig from '@billoneta/config/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
 // prettier
 eslintConfig.base,
 eslintConfig.node,
 eslintConfig.typescript,
 eslintConfig.turbo,
 eslintConfig.next,
 eslintConfig.react,
 eslintConfig.prettier,
 globalIgnores(['packages/**/**/**/*.cjs'], 'Ignore any coomon js files'),
 {
  name: 'Override',
  rules: {
   'require-await': 'off',
  },
 },
]);
