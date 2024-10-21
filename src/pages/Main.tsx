import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";

interface todosList {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //*bu veri olabilirde olmayabilirde
}

const Main = () => {
  const [todos, setTodos] = useState<todosList[]>([]);
  const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

  const getTodos = async () => {
    try {
      const res = await axios(url);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
