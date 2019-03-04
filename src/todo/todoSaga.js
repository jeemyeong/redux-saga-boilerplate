import { put, takeEvery, select } from 'redux-saga/effects'
import { addTodo, changeInput, todoActionTypes } from "./todoActions.js";


export function* todoSaga() {
  yield put(addTodo("Hello World"));
  yield put(addTodo("Hello World22"));
  yield takeEvery(todoActionTypes.TODO_ADD, function* clearInput() {
    yield put(changeInput(""));
  });
  yield takeEvery(todoActionTypes.TODO_INPUT_FOCUS, function* ({ focused }) {
    const value = yield select(state => state.todoForm.value);
    if (!focused && !!value) {
      yield put(addTodo(value));
    }
  });
}