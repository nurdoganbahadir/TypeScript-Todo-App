import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

interface Props {
  addTodo: (task: string) => Promise<void>;
}

const AddTodo = ({ addTodo }: Props) => {
  const [task, setTask] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        margin: { xs: "1", sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        variant="outlined"
        color="success"
        placeholder="New Todo"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="success"
        sx={{
          minWidth: { xs: "100%", sm: "15%" },
          height: { xs: "40px", sm: "55px" },
          m: 1,
        }}
      >
        <SaveIcon />
      </Button>
    </Box>
  );
};

export default AddTodo;
