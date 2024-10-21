import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import { notify, SweetIcon } from "../helper/sweetAlert";

// interface todosList {
//   task: string;
//   isDone: boolean;
//   id: string | number;
//   owner?: string; //*bu veri olabilirde olmayabilirde
// }

const Main = () => {
  const [todos, setTodos] = useState<todosList[]>([]);
  const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

  const getTodos = async () => {
    try {
      const { data } = await axios<todosList[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  // type AddFn = (task: string) => Promise<void>;
  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      getTodos();
      notify("Todo created", SweetIcon.SUCCESS);
    } catch (error) {
      console.log(error);
      notify("Todo not created!", SweetIcon.ERROR);
    }
  };

  const updateTodo: UpdateFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      getTodos();
      notify("Todo updated", SweetIcon.SUCCESS);
    } catch (error) {
      console.log(error);
      notify("Todo not updated!", SweetIcon.ERROR);
    }
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
      notify("Todo deleted", SweetIcon.SUCCESS);
    } catch (error) {
      console.log(error);
      notify("Todo not deleted!", SweetIcon.ERROR);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Main;
