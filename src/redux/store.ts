import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducers from 'redux/reducers';
import sagas from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware,
});

sagaMiddleware.run(sagas);

export default store;
