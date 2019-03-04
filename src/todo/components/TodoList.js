import React from 'react';
import { connect } from "react-redux";
import { completeAllTodos, incompleteAllTodos, toggleTodoComplete } from "../todoActions.js";

const TodoList = ({
  todos,
  toggleTodoComplete,
  completeAllTodos,
  incompleteAllTodos
}) => {

  const allCompleted = !todos.map(todo => todo.completed).includes(false);
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={() => allCompleted ? incompleteAllTodos() : completeAllTodos()}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(todo => (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo)}/>
              <label>{todo.value}</label>
              <button className="destroy"/>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default connect(
  ({todos}) => ({todos}),
  {
    toggleTodoComplete,
    completeAllTodos,
    incompleteAllTodos
  }
)(TodoList);
