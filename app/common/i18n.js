import T from 'i18n-react';
window.L10n = T;

function loadLocale(locale) {
  return new Promise((resolve, reject) => {
    import(`../config/locales/${locale}.json`).then(resp => {
      resolve(resp.default);
    }).catch(() => {
      reject();
    });
  });
}

T.t = (key, val) => {
  // TODO : error handling if needed
  return T.translate(key, val);
};

export function init(locale) {
  return new Promise((resolve, reject) => {
    loadLocale(locale).then((resp) => {
      T.setTexts(resp);
      resolve();
    }).catch(() => {
      reject();
    });
  });
}