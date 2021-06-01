import { noteState } from "../../../util/interfaces";

const CreateTick = ({ eachNote, setEachNote, note, keyevent }: noteState) => {
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
      <input type="checkbox" checked={note ? note.checked : eachNote?.checked} onChange={handleCheck} />
      <input
        type="text"
        className="modalTick-input"
        value={note ? note.note : eachNote?.note}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={{
          textDecoration: note ? (note.checked ? "line-through" : "") : eachNote?.checked ? "line-through" : "",
        }}
      />
    </div>
  );
};

export default CreateTick;
