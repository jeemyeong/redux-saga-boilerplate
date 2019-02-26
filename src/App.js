import React from 'react';
import './App.css';
import TodoApp from "./todo/components/TodoApp.js";
import Info from "./layout/Info.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp/>
      <Info/>
    </Provider>
  );
};

export default App;
