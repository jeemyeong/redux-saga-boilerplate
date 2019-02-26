export const todoActionTypes = {
  TODO_ADD: "ADD_TODO",
  TODO_TOGGLE_COMPLETE: "TODO_TOGGLE_COMPLETE",
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