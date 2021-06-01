import TickItem from "./TickItem";

const TodoCard = () => {
  return (
    <div className="card">
      <h3>Shopping List</h3>

      <div className="cardContent">
        <TickItem listItem={"Egg"} isChecked />
        <TickItem listItem={"Egg"} isChecked={false} />
        <TickItem listItem={"Egg"} isChecked />
      </div>
    </div>
  );
};

export default TodoCard;
