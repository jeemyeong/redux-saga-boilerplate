import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer.js";
import rootSaga from "./rootSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

rootSaga.map(saga => sagaMiddleware.run(saga));

export default store;