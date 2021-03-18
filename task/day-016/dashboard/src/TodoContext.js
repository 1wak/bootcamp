import React, { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: v4() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearList = () => {
    setTodos([]);
  };

  const findItem = (id) => {
    const item = todos.find((todo) => todo.id === id);

    setEditItem(item);
  };

  const editTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );

    console.log(newTodo);

    setTodos(newTodo);
    setEditItem(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearList,
        findItem,
        editTodo,
        editItem,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
