import LocalizedStrings from 'react-localization';
import { AsyncStorage } from 'react-native';
import { Util } from 'expo';
import { AppStorage } from '../class';
let strings;

// first-time loading sequence
(async () => {
  // finding out whether lang preference was saved
  let lang = await AsyncStorage.getItem(AppStorage.LANG);
  if (lang) {
    strings.setLanguage(lang);
    return;
  }

  // TODO: rewrite this when Expo version is upped
  if (Util.getCurrentLocaleAsync) {
    let locale = await Util.getCurrentLocaleAsync();
    if (locale) {
      locale = locale.split('-');
      locale = locale[0];
      console.log('current locale:', locale);
      if (
        locale === 'en' ||
        locale === 'ru' ||
        locale === 'ua' ||
        locale === 'es' ||
        locale === 'pt'
      ) {
        strings.setLanguage(locale);
      } else {
        strings.setLanguage('en');
      }
    }
  }
})();

strings = new LocalizedStrings({
  en: require('./en.js'),
  ru: require('./ru.js'),
  pt: require('./pt_BR.js'),
  es: require('./es.js'),
  ua: require('./ua.js'),
});

strings.saveLanguage = lang => AsyncStorage.setItem(AppStorage.LANG, lang);

strings.transactionTimeToReadable = function(time) {
  if (time === 0) {
    return 'never';
  }

  let ago = (Date.now() - Date.parse(time)) / 1000; // seconds
  if (ago / (3600 * 24) >= 30) {
    ago = Math.round(ago / (3600 * 24 * 30));
    return ago + ' months ago';
  } else if (ago / (3600 * 24) >= 1) {
    ago = Math.round(ago / (3600 * 24));
    return ago + ' days ago';
  } else {
    ago = Math.round(ago / 3600);
    return ago + ' hours ago';
  }
};

module.exports = strings;
