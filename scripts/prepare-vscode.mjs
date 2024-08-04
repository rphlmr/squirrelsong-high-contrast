/**
 * Prepare VS Code extensions:
 * 1. Create Light with dark terminal theme
 */

import fs from 'node:fs';
import stripJsonComments from 'strip-json-comments';

const LIGHT_DIR = 'themes/VSCode/SquirrelsongLight';
const DARK_DIR = 'themes/VSCode/SquirrelsongDark';
const BASE_LIGHT = `${LIGHT_DIR}/SquirrelsongLight.color-theme.json`;
const BASE_DARK = `${DARK_DIR}/SquirrelsongDark.color-theme.json`;

function readJsonFile(file) {
  return JSON.parse(stripJsonComments(fs.readFileSync(file, 'utf8')));
}

function writeJsonFile(file, json) {
  return fs.writeFileSync(file, JSON.stringify(json, undefined, '  '));
}

const baseLight = readJsonFile(BASE_LIGHT);
const baseDark = readJsonFile(BASE_DARK);

// Create Light with dark terminal theme

console.log();
console.log('[VSCODE] Preparing light theme with dark terminal... 🌗');

// const lightWithDarkTerminal = _.cloneDeep(baseLight);
const lightWithDarkTerminal = {
  ...baseLight,
  name: 'Squirrelsong Light (Dark Terminal)',
  colors: { ...baseLight.colors },
};

const darkColors = Object.entries(baseDark.colors);
const darkTerminalColors = darkColors.filter(([key]) =>
  key.startsWith('terminal'),
);

for (const [key, color] of darkTerminalColors) {
  lightWithDarkTerminal.colors[key] = color;
}

writeJsonFile(
  `${LIGHT_DIR}/SquirrelsongLightDarkTerminal.color-theme.json`,
  lightWithDarkTerminal,
);

console.log('[VSCODE] Done 🦜');
