import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";

interface ITodoItem {
  todo: todosList;
  updateTodo: UpdateFn;
  deleteTodo: DeleteFn;
}

const TodoItem: FC<ITodoItem> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem
        disableGutters
        sx={{ padding: "1rem", cursor: "pointer" }}
        secondaryAction={
          <IconButton aria-label="comment">
            <DeleteIcon
              sx={{ "&:hover": { color: "red" } }}
              onClick={() => deleteTodo(todo.id)}
            />
          </IconButton>
        }
      >
        <ListItemText primary={todo.task} onClick={() => updateTodo(todo.id)} />
      </ListItem>
    </List>
  );
};

export default TodoItem;
