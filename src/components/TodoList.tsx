import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

interface ITodoList {
  todos: todosList[];
  updateTodo: UpdateFn;
  deleteTodo: DeleteFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, updateTodo, deleteTodo }) => {
  const inProgressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  console.log(inProgressTodos);
  console.log(completedTodos);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      <Grid
        size={{ xs: 12, sm: 8, md: 5 }}
        position="relative"
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          className="title"
          color="primary"
          align="center"
          variant="h4"
        >
          Progress
        </Typography>
        {inProgressTodos.length ? (
          inProgressTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color="error">No Todos</Typography>
        )}
      </Grid>
      <Grid
        size={{ xs: 12, sm: 8, md: 5 }}
        position="relative"
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.4rem",
        }}
      >
        <Typography className="title" color="green" align="center" variant="h4">
          Completed
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color="error">No Completed Todos</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
