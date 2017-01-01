import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import persistState from 'redux-localstorage';
import localstorageConfig from './localstorage';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    persistState('soap', localstorageConfig),
    applyMiddleware(thunk)
  );
}
