import Frisbee from 'frisbee';
import { AsyncStorage } from 'react-native';
import { AppStorage } from './class';

let lang = {};
// let btcusd = 6500; // default

const STRUCT = {
  LAST_UPDATED: 'LAST_UPDATED',
  BTC_USD: 'BTC_USD',
};

async function updateExchangeRate() {
  if (+new Date() - lang[STRUCT.LAST_UPDATED] <= 30 * 60 * 1000) {
    // not updating too often
    return;
  }

  let json;
  try {
    const api = new Frisbee({
      baseURI: 'https://www.bitstamp.net',
    });

    let response = await api.get('/api/v2/ticker/btcusd');
    json = response.body;
    if (typeof json === 'undefined' || typeof json.last === 'undefined') {
      throw new Error('Could not update currency rate: ' + response.err);
    }
  } catch (Err) {
    console.warn(Err);
  }

  lang[STRUCT.LAST_UPDATED] = +new Date();
  lang[STRUCT.BTC_USD] = json.last * 1;
  await AsyncStorage.setItem(AppStorage.CURRENCY, JSON.stringify(lang));
  console.log('updated currency exchange:', lang);
}

async function startUpdater() {
  lang = await AsyncStorage.getItem(AppStorage.CURRENCY);
  try {
    lang = JSON.parse(lang);
  } catch (Err) {
    lang = {};
  }
  if (lang) {
    console.log('lang is true');
  }
  lang = lang || {};

  lang[STRUCT.LAST_UPDATED] = lang[STRUCT.LAST_UPDATED] || 0;
  lang[STRUCT.BTC_USD] = lang[STRUCT.BTC_USD] || 6500;

  setInterval(() => updateExchangeRate(), 2 * 60 * 100);
  return updateExchangeRate();
}

module.exports.updateExchangeRate = updateExchangeRate;
module.exports.startUpdater = startUpdater;
module.exports.STRUCT = STRUCT;
