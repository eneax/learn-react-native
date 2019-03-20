// ! Local Storage Example

/*
In order to persist data in a web application,
we'd normally store the data in some sort of database.

This prevents app data from being lost between page refreshes.
Using localStorage, we can achieve a similar effect for the user by storing this data directly in their browser.
Best of all -- data stored in localStorage has no expiration date.
This means that even if a session ends (e.g. the browser tab is closed), data will not be lost!
*/


// store.js

import { createStore } from 'redux';
import Reducer from '../reducers/reducer';

const configureStore = () => {
  const store = createStore(Reducer);

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
};

export default configureStore;


/*

After the store is created, we call store.subscribe() and pass in a callback function.
The callback effectively saves a JSON string of the store's state into localStorage.
As a result, by subscribing to the store right after it is created, we can save data related to all of the user's tasks right into their browser!

*/