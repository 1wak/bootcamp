import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="empty">You have nothing to do :) </div>
      )}
    </div>
  );
};

export default TodoList;
