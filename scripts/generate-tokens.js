import { readFileSync, writeFileSync } from 'node:fs';

const tokensFile = new URL('../src/tokens/tokens.json', import.meta.url);
const tokens = JSON.parse(readFileSync(tokensFile, 'utf8'));

const breakpointsFile = new URL('../src/styles/_breakpoints.scss', import.meta.url);
const breakpointsScss = `
$breakpoint-tablet: ${tokens.breakpoints.tablet}px;
`;
writeFileSync(breakpointsFile, breakpointsScss, 'utf8');
// console.log(breakpointsScss);
