import { CreateTicketProps } from "../../../util/interfaces";

const CreateTick = ({ eachNote, setEachNote, keyevent }: CreateTicketProps) => {
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (eachNote?.note) {
        keyevent(e);
        setEachNote({ note: "", checked: false });
        e.target.value = "";
      }
    }
  };
  const handleChange = (e: any) => {
    setEachNote({ ...eachNote, note: e.target.value });
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
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={{
          textDecoration: eachNote?.checked ? "line-through" : "",
        }}
      />
    </div>
  );
};

export default CreateTick;
