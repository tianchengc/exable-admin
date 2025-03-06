// store.js
import { createStore } from 'redux';
import buttonReducer from './reducer';

const store = createStore(buttonReducer);

export default store;
