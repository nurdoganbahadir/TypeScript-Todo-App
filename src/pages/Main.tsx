import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";

const Main = () => {
  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
