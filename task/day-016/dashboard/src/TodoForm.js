import { Grid } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const { addTodo, clearList, editTodo, editItem } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTodo(title);
      setTitle("");
    } else {
      editTodo(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        required
      />
      <Grid container>
        <button type="submit">{editItem ? "Edit Todo" : "Add Todo"}</button>
        <button onClick={clearList}>Clear</button>
      </Grid>
    </form>
  );
};

export default TodoForm;
