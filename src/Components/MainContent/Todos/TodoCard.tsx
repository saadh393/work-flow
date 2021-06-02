// import { NoteProvider } from "../../../util/interfaces";
import TickItem from "./TickItem";

const TodoCard = ({ todo }: any) => {
  return (
    <div className="card">
      <h3>Shopping List</h3>

      <div className="cardContent">
        {todo.map((tick: any) => (
          <TickItem listItem={tick.note} isChecked={tick.checked} />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
