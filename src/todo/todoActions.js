export const todoActionTypes = {
  TODO_ADD: "ADD_TODO",
  TODO_TOGGLE_COMPLETE: "TODO_TOGGLE_COMPLETE",
  TODO_COMPLETE_ALL: "TODO_COMPLETE_ALL",
  TODO_INCOMPLETE_ALL: "TODO_INCOMPLETE_ALL",
  TODO_INPUT_CHANGE: "TODO_INPUT_CHANGE",
  TODO_INPUT_FOCUS: "TODO_INPUT_FOCUS"
};

export const addTodo = (value) => {
  return ({
    type: todoActionTypes.TODO_ADD,
    todo: {
      completed: false,
      value
    }
  })
};

export const toggleTodoComplete = (todo) => {
  return ({
    type: todoActionTypes.TODO_TOGGLE_COMPLETE,
    todo
  })
};

export const completeAllTodos = () => {
  return ({
    type: todoActionTypes.TODO_COMPLETE_ALL,
  })
};

export const incompleteAllTodos = () => {
  return ({
    type: todoActionTypes.TODO_INCOMPLETE_ALL,
  })
};

export const focusInput = (focused) => {
  return ({
    type: todoActionTypes.TODO_INPUT_FOCUS,
    focused
  })
};

export const changeInput = (value) => {
  return ({
    type: todoActionTypes.TODO_INPUT_CHANGE,
    value
  })
};