import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

const store = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const configStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);

  return configStore;
};

export default store;