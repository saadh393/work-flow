/* eslint-disable react-hooks/exhaustive-deps */
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
    <section className='todo-section'>
      <h1>Todos</h1>
      <div className='todo-wrapper'>
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Todos;
