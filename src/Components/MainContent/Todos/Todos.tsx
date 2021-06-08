import TodoCard from "./TodoCard";
import "./Todo.css";
import { useToggleEvents } from "../../../App";
import { useEffect } from "react";
import { getNotes } from "../../../util/firestore";

const Todos = () => {
  const { todos, setTodo } = useToggleEvents();

  useEffect(() => {
    const notes = getNotes();
    notes.then((res) => setTodo([...res]));
  }, []);

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
