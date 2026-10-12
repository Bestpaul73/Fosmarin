import { defaultLanguage, languages } from '../src/i18n/languages.js';

import en from '../src/i18n/en.js';

// Ключи переводов, для которых допустима пустая строка.
const EMPTY_STRING_EXCEPTIONS = new Set([
  // Например: "contact.form.note"
]);

// Массивы, длина которых может отличаться между языками.
const FREE_LENGTH_ARRAYS = new Set([
  // Например: "technology.simpleWords.paragraphs"
]);

// Строковые массивы-идентификаторы: те же элементы, что в EN, без перевода.
const IDENTIFIER_ARRAYS = new Set(['consortium.roles.groups[].roles', 'consortium.stakeholders.groups[].roles']);

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function valueType(value) {
  if (value === null) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  return typeof value;
}

function joinKey(parent, key) {
  const isIdentifier = /^[A-Za-z_][A-Za-z0-9_]*$/.test(key);
  const segment = isIdentifier ? key : `['${String(key).replaceAll("'", "\\'")}']`;

  if (!parent) {
    return segment;
  }

  return isIdentifier ? `${parent}.${segment}` : `${parent}${segment}`;
}

function joinIndex(parent, index) {
  return `${parent}[${index}]`;
}

function policyPath(path) {
  return path.replace(/\[\d+\]/g, '[]');
}

function addIssue(issues, type, path, details = {}) {
  issues.push({ type, path, ...details });
}

function compareLeaves(expected, actual, path, issues) {
  const expectedType = valueType(expected);
  const actualType = valueType(actual);

  if (expectedType !== actualType) {
    addIssue(issues, 'type', path, { expected: expectedType, actual: actualType });
    return;
  }

  if (expectedType === 'string' && actual === '' && !EMPTY_STRING_EXCEPTIONS.has(path)) {
    addIssue(issues, 'empty', path);
  }
}

function compareIdentifierArray(expected, actual, path, issues) {
  const expectedItems = expected.map(String);
  const actualItems = actual.map(String);
  const expectedSet = new Set(expectedItems);
  const actualSet = new Set(actualItems);

  for (const item of expectedSet) {
    if (!actualSet.has(item)) {
      addIssue(issues, 'missing-identifier', path, { value: item });
    }
  }

  for (const item of actualSet) {
    if (!expectedSet.has(item)) {
      addIssue(issues, 'extra-identifier', path, { value: item });
    }
  }
}

function compareArrays(expected, actual, path, issues) {
  if (!Array.isArray(actual)) {
    addIssue(issues, 'type', path, { expected: 'array', actual: valueType(actual) });
    return;
  }

  const policy = policyPath(path);

  if (IDENTIFIER_ARRAYS.has(policy)) {
    compareIdentifierArray(expected, actual, path, issues);
    return;
  }

  if (FREE_LENGTH_ARRAYS.has(policy)) {
    const sampleType = expected.length > 0 ? valueType(expected[0]) : null;

    if (sampleType) {
      actual.forEach((item, index) => {
        if (valueType(item) !== sampleType) {
          addIssue(issues, 'type', joinIndex(path, index), { expected: sampleType, actual: valueType(item) });
        }
      });
    }

    return;
  }

  if (actual.length !== expected.length) {
    addIssue(issues, 'array-length', path, { expected: expected.length, actual: actual.length });
  }

  const sharedLength = Math.min(expected.length, actual.length);

  for (let index = 0; index < sharedLength; index += 1) {
    walk(expected[index], actual[index], joinIndex(path, index), issues);
  }
}

function compareObjects(expected, actual, path, issues) {
  if (!isPlainObject(actual)) {
    addIssue(issues, 'type', path, { expected: 'object', actual: valueType(actual) });
    return;
  }

  for (const key of Object.keys(expected)) {
    const childPath = joinKey(path, key);

    if (!Object.hasOwn(actual, key)) {
      addIssue(issues, 'missing', childPath);
      continue;
    }

    if (actual[key] === undefined) {
      addIssue(issues, 'undefined', childPath);
      continue;
    }

    walk(expected[key], actual[key], childPath, issues);
  }

  for (const key of Object.keys(actual)) {
    if (!Object.hasOwn(expected, key)) {
      addIssue(issues, 'extra', joinKey(path, key));
    }
  }
}

function walk(expected, actual, path, issues) {
  if (Array.isArray(expected)) {
    compareArrays(expected, actual, path, issues);
    return;
  }

  if (isPlainObject(expected)) {
    compareObjects(expected, actual, path, issues);
    return;
  }

  compareLeaves(expected, actual, path, issues);
}

function formatIssue(issue) {
  switch (issue.type) {
    case 'missing':
      return `missing ${issue.path}`;
    case 'undefined':
      return `undefined ${issue.path}`;
    case 'extra':
      return `extra ${issue.path}`;
    case 'empty':
      return `empty ${issue.path}`;
    case 'type':
      return `type ${issue.path} (expected ${issue.expected}, got ${issue.actual})`;
    case 'array-length':
      return `array-length ${issue.path} (expected ${issue.expected}, got ${issue.actual})`;
    case 'missing-identifier':
      return `missing-identifier ${issue.path} (${issue.value})`;
    case 'extra-identifier':
      return `extra-identifier ${issue.path} (${issue.value})`;
    default:
      return `${issue.type} ${issue.path}`;
  }
}

const dictionaries = { [defaultLanguage]: en };

for (const { code } of languages) {
  if (code === defaultLanguage) {
    continue;
  }

  const module = await import(`../src/i18n/${code}.js`);
  dictionaries[code] = module.default;
}

let failed = false;

for (const { code } of languages) {
  if (code === defaultLanguage) {
    continue;
  }

  const issues = [];

  if (!isPlainObject(dictionaries[code])) {
    addIssue(issues, 'type', '', { expected: 'object', actual: valueType(dictionaries[code]) });
  } else {
    walk(en, dictionaries[code], '', issues);
  }

  if (issues.length === 0) {
    console.log(`${code}: ok`);
    continue;
  }

  failed = true;

  console.log(`${code}: ${issues.length} issue(s)`);

  for (const issue of issues) {
    console.log(`  ${formatIssue(issue)}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log('Translation dictionaries match the English key tree.');
