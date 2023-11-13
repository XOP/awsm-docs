import path from 'path';
import fs from 'fs/promises';

import * as palette from '../src/lib/tokens/palette';

import { prefix, convertVarsToCss, convertVarsToRefs } from './utils';

const category = 'color';
const commonPrefix = [prefix, category];

const cssOutputDir = path.resolve(process.cwd(), 'src/lib/css');
const cssOutputFile = 'palette.css';

const varsOutputDir = path.resolve(process.cwd(), 'src/lib/tokens');
const varsOutputFile = 'palette.vars.ts';

const memo = '/* generated file, do not edit directly */\n\n';

let cssData = '';
let cssOutput = memo;
let varsOutput = memo;
let varsData;
let paletteData: object | null = null;

// CSS variables compilation
Object.entries(palette).forEach(([moduleName, moduleData]) => {
  const r = moduleName.match(/([A-Z])\w+/);

  if (!r && !r?.[0]) {
    throw new Error('❌ check exported palette name, it should satisfy the pattern "paletteFooBar"');
  }

  cssData += convertVarsToCss(moduleData, ...commonPrefix);

  const paletteName = r![0].toLowerCase();

  // for default palette without data-* attribute
  if (/base/.test(paletteName)) {
    cssOutput += `:root, `;
  }

  cssOutput += `:root[data-${prefix}='${paletteName}'] `;
  cssOutput += `{\n${cssData}\n}\n`;

  // for reference building this only needs to be done once
  if (!paletteData) {
    paletteData = JSON.parse(JSON.stringify(moduleData));
  }
});

// CSS variables references compilation
if (paletteData) {
  varsData = convertVarsToRefs(paletteData, ...commonPrefix);
  varsOutput += `export const paletteVars = ${JSON.stringify(varsData, null, 2)};`;
}

(async () => {
  await fs.writeFile(path.resolve(cssOutputDir, cssOutputFile), cssOutput);
  await fs.writeFile(path.resolve(varsOutputDir, varsOutputFile), varsOutput);
  console.log('✅ palette variables generated!');
})();
