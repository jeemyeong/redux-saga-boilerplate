import React from 'react';
import { connect } from "react-redux";
import { addTodo, changeInput, focusInput } from "../todoActions.js";

const TodoInput = ({
  todoForm,
  focusInput,
  changeInput,
  addTodo
}) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todoForm.value}
        onChange={e => changeInput(e.target.value)}
        onKeyUp={e => e.key === "Enter" && (addTodo(todoForm.value))}
        onFocus={() => focusInput(true)}
        onBlur={() => focusInput(false)}
      />
    </header>
  );
};

export default connect(
  ({todoForm}) => ({todoForm}),
  {
    focusInput,
    changeInput,
    addTodo
  }
)(TodoInput);
