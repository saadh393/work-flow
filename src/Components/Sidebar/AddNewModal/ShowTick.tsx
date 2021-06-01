import { ShowTickProps } from "../../../util/interfaces";

const ShowTick = ({ SavedData }: ShowTickProps) => {
  const handleCheck = (e: any) => {};

  return (
    <div className="modaltick-wrapper">
      <input type="checkbox" checked={SavedData.checked} onChange={handleCheck} />
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
