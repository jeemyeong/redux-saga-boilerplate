import { todoActionTypes } from "./todoActions.js";

export const todos = (state = [], action) => {
  switch (action.type) {
    case todoActionTypes.TODO_ADD:
      return [...state, {
        ...action.todo,
        id: state.length
      }];
    case todoActionTypes.TODO_TOGGLE_COMPLETE:
      state
        .filter(todo => todo.id === action.todo.id)
        .forEach(todo => {
          todo.completed = !todo.completed
        });
      return [
        ...state
      ];
    case todoActionTypes.TODO_COMPLETE_ALL:
      return [
        ...state.map(todo => ({...todo, completed: true}))
      ];
    case todoActionTypes.TODO_INCOMPLETE_ALL:
      return [
        ...state.map(todo => ({...todo, completed: false}))
      ];
    default:
      return state;
  }
};

export const todoForm = (state = {value: "", focused: false}, action) => {
  switch (action.type) {
    case todoActionTypes.TODO_INPUT_CHANGE:
      return {
        ...state,
        value: action.value
      };
    case todoActionTypes.TODO_INPUT_FOCUS:
      return {
        ...state,
        focused: action.focused
      };
    default:
      return state;
  }
};
