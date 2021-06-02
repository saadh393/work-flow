import { ShowTickProps } from "../../../util/interfaces";

const ShowTick = ({ SavedData, updateCheck }: ShowTickProps) => {
  return (
    <div className="modaltick-wrapper">
      <input
        type="checkbox"
        checked={SavedData.checked}
        onChange={() => updateCheck(!SavedData.checked, SavedData.id)}
      />
      <input
        type="text"
        className="modalTick-input"
        value={SavedData.note}
        style={{
          textDecoration: SavedData.checked ? "line-through" : "",
        }}
      />
    </div>
  );
};

export default ShowTick;
