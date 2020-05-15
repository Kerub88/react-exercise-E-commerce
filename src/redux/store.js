import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore} from 'redux-persist'

import rootReducer from './root-reducer';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
