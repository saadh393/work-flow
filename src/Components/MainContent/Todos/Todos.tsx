import TodoCard from "./TodoCard";
import "./Todo.css";

const Todos = () => {
  return (
    <section className="todo-section">
      <h1>Todos</h1>

      <div className="todo-wrapper">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </section>
  );
};

export default Todos;
