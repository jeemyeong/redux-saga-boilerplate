import React from "react";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoFilter from "./TodoFilter.js";

const TodoApp = () => {
  return (
    <section className="todoapp">
      <TodoInput/>
      <TodoList/>
      <TodoFilter/>
    </section>
  )
};

export default TodoApp