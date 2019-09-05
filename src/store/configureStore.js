import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  /* eslint-disable no-underscore-dangle, no-undef */
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable */
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);
  return { store };
}

// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist'
// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore(initialState = {}) {
//   const middlewares = [sagaMiddleware];
//   const enhancers = [applyMiddleware(...middlewares)];
//   /* eslint-disable no-underscore-dangle, no-undef */
//   const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;
//   /* eslint-enable */

//   const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['login'],
//   };

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(...enhancers),
//   );

//   const persistor = persistStore(store)

//   sagaMiddleware.run(rootSaga);
//   return {
//     persistedReducer,
//     store,
//     persistor,
//   };
// }