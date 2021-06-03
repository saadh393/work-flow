import TodoCard from "./TodoCard";
import "./Todo.css";
import { useToggleEvents } from "../../../App";

const Todos = () => {
  const { todos } = useToggleEvents();
  return (
    <section className="todo-section">
      <h1>Todos</h1>
      {console.log(todos)}
      <div className="todo-wrapper">
        {todos.map((todo) => (
          <TodoCard todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default Todos;
