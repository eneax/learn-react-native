import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './_calendar'


export function fetchCalendarResults () {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}


// 1. Submit entry for the day
// 2. Add it to the 'DB'
export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry,
  }));
}

export function removeEntry(key) {
  // 1. Get everything
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    // 2. Delete everything with that particular key
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    });
}
