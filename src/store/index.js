import { createStore, applyMiddleware, compose } from 'redux';
import { withExtraArgument } from 'redux-thunk'; // Importez Redux Thunk

import reducer from '../reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(withExtraArgument) // Utilisez applyMiddleware pour inclure Redux Thunk
);

const store = createStore(reducer, enhancers);

export default store;