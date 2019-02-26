import { put, takeEvery } from 'redux-saga/effects'
import { addTodo, changeInput, todoActionTypes } from "./todoActions.js";

function* clearInput() {
  yield put(changeInput(""));
}

export function* todoSaga() {
  yield put(addTodo("Hello World"));
  yield put(addTodo("Hello World22"));
  yield takeEvery(todoActionTypes.TODO_ADD, clearInput);
}