// HACK: ESLint doesn't yet support `width` suffixes,
// this file is ignored in ESLint config
// https://github.com/eslint/eslint/discussions/15305

import cssColorNames from 'css-color-names' with { type: 'json' };

export { cssColorNames };
