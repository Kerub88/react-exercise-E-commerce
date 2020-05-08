import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore} from 'redux-persist'

import rootReducer from './root-reducer';

const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
