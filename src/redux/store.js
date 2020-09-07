import { createStore, applyMiddleware, compose } from 'redux';
import reduces from './reduces';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = compose(
    applyMiddleware(sagaMiddleware),
);

export const store = createStore(
    reduces,
    storeEnhancers
);

sagaMiddleware.run(rootSaga);