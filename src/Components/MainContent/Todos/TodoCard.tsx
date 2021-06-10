// import { NoteProvider } from "../../../util/interfaces";
import { Link } from "react-router-dom";
import TickItem from "./TickItem";

const TodoCard = ({ todo }: any) => {
  return (
    <Link to={`/note/${todo.id}`}>
      <div className="card">
        <h3>{todo.title}</h3>

        <div className="cardContent">
          {[...todo.noteItems].reverse().map((tick: any) => (
            <TickItem listItem={tick.note} isChecked={tick.checked} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default TodoCard;
