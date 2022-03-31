import { TodoProvider } from "./context/TodoProvider";
import { Title } from "./todo/components/Title";
import { TodoList } from "./todo/components/TodoList";

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
