// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import neostandard from 'neostandard'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'node_modules', 'storybook-static', '.storybook'] },
  ...neostandard({ ts: true, files: ['**/*.{js,jsx,ts,tsx}'] }),
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@/semi': ['error', 'never'],
      '@/max-len': ['error', { code: 120 }],
    },
  },
  ...storybook.configs["flat/recommended"]
];
