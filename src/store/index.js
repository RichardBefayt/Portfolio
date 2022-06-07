import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers/';

import messageMiddleware from '../middlewares/message';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = messageMiddleware;

const enhancers = composeEnhancers(
    applyMiddleware(middlewares),
);

const store = createStore(reducer, enhancers);

export default store;