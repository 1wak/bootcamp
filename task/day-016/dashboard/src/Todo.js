import { Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  gridAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Todo = ({ todo }) => {
  const classes = useStyles();
  const { removeTodo, findItem } = useContext(TodoContext);
  return (
    <li className={classes.root}>
      <Grid className={classes.gridAlign} container spacing={3}>
        <Grid item md={6}>
          <Typography>{todo.title} </Typography>
        </Grid>
        <Grid item md={3}>
          <button onClick={() => removeTodo(todo.id)}>
            <DeleteIcon />
          </button>
        </Grid>

        <Grid item md={3}>
          <button onClick={() => findItem(todo.id)}>
            <EditIcon />
          </button>
        </Grid>
      </Grid>
    </li>
  );
};

export default Todo;
