import { CreateTicketProps } from "../../../util/interfaces";

const CreateTick = ({ eachNote, setEachNote, keyevent, handleChange }: CreateTicketProps) => {
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (eachNote?.note) {
        keyevent(e);
        setEachNote({ note: "", checked: false });
        e.target.value = "";
      }
    }
  };

  const handleCheck = (e: any) => {
    setEachNote({ ...eachNote, checked: e.target.checked });
  };

  return (
    <div className="modaltick-wrapper">
      <input type="checkbox" checked={eachNote?.checked} onChange={handleCheck} />
      <input
        type="text"
        className="modalTick-input"
        value={eachNote?.note}
        onChange={(e) => handleChange(e)}
        onKeyPress={handleKeyPress}
        style={{
          textDecoration: eachNote?.checked ? "line-through" : "",
        }}
      />
    </div>
  );
};

export default CreateTick;
