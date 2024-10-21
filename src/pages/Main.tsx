import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useState } from "react";

interface todosList {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //*bu veri olabilirde olmayabilirde
}

const Main = () => {
  const [todos, setTodos] = useState();

  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
