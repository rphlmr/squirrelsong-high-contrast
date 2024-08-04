import tamia from 'eslint-config-tamia';
export default [
  ...tamia,
  {
    ignores: ['scripts/lib/cssColorNames.mjs', 'sample/**', 'dist/**'],
  },
];
