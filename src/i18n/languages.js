export const languages = [
  {
    code: 'en',
    label: 'EN',
    name: 'English',
    prefix: '',
  },
  {
    code: 'de',
    label: 'DE',
    name: 'Deutsch',
    prefix: '/de',
  },
  {
    code: 'es',
    label: 'ES',
    name: 'Español',
    prefix: '/es',
  },
];

export const defaultLanguage = 'en';

export function getLanguageFromPath(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];

  const language = languages.find((item) => item.prefix === `/${firstSegment}`);

  return language?.code ?? defaultLanguage;
}

export function getLanguagePrefix(languageCode) {
  return languages.find((language) => language.code === languageCode)?.prefix ?? '';
}

export function stripLanguagePrefix(pathname) {
  const language = getLanguageFromPath(pathname);
  const prefix = getLanguagePrefix(language);

  if (!prefix) {
    return pathname || '/';
  }

  const pathWithoutPrefix = pathname.slice(prefix.length);

  return pathWithoutPrefix || '/';
}

export function localizePath(path, languageCode) {
  const prefix = getLanguagePrefix(languageCode);

  if (path === '/') {
    return prefix || '/';
  }

  return `${prefix}${path}`;
}
