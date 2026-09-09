import { readFileSync, writeFileSync } from 'node:fs';

const tokensFile = new URL('../src/tokens/tokens.json', import.meta.url);
const tokens = JSON.parse(readFileSync(tokensFile, 'utf8'));

// Преобразует camelCase-имя токена в kebab-case для SCSS.
function toKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

const breakpointsFile = new URL('../src/styles/_breakpoints.scss', import.meta.url);
// Генерирует SCSS-переменные для всех breakpoints из tokens.json.
const breakpointsScss = Object.entries(tokens.breakpoints)
  .map(([name, value]) => `$breakpoint-${toKebabCase(name)}: ${value}px;`)
  .join('\n');
writeFileSync(breakpointsFile, `${breakpointsScss}\n`, 'utf8');
// console.log(breakpointsScss);

const colorsFile = new URL('../src/styles/_colors.scss', import.meta.url);

// Генерирует SCSS-переменную для каждого цвета из tokens.json.
const colorsScss = Object.entries(tokens.colors)
  .map(([name, value]) => `$${toKebabCase(name)}: ${value};`)
  .join('\n');

writeFileSync(colorsFile, `${colorsScss}\n`, 'utf8');

const typographyFile = new URL('../src/styles/_typography.scss', import.meta.url);

// Генерирует SCSS-переменные для шрифтов из tokens.json.
const typographyScss = Object.entries(tokens.fonts)
  .map(([name, value]) => `$font-${toKebabCase(name)}: '${value}';`)
  .join('\n');

writeFileSync(typographyFile, `${typographyScss}\n`, 'utf8');

const layoutFile = new URL('../src/styles/_layout.scss', import.meta.url);

// Генерирует SCSS-переменные для размеров layout из tokens.json.
const layoutScss = Object.entries(tokens.layout)
  .map(([name, value]) => `$${toKebabCase(name)}: ${value}px;`)
  .join('\n');

writeFileSync(layoutFile, `${layoutScss}\n`, 'utf8');

const radiiFile = new URL('../src/styles/_radii.scss', import.meta.url);

// Генерирует SCSS-переменные для радиусов из tokens.json.
const radiiScss = Object.entries(tokens.radii)
  .map(([name, value]) => `$radius-${toKebabCase(name)}: ${value}px;`)
  .join('\n');

writeFileSync(radiiFile, `${radiiScss}\n`, 'utf8');
