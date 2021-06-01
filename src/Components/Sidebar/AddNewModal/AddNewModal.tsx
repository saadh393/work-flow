import ModalTick from "./CreateTick";
import { provider } from "../../../util/interfaces";

import "./AddNewModal.css";
import React from "react";
import { useToggleEvents } from "../../../App";
import ShowTick from "./ShowTick";

const AddNewModal = () => {
  const { noteItems, setNoteItem } = useToggleEvents();
  const [eachNote, setEachNote] = React.useState<provider>({ note: undefined, checked: false });

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      eachNote.note && setNoteItem([...noteItems, eachNote]);
      setEachNote({});
    }
  };

  const storeItems = () => {
    eachNote.note && setNoteItem([...noteItems, eachNote]);
    setEachNote({ note: undefined });
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-card">
          <input type="text" placeholder="Title" className="title" />
          <div className="description">
            <ModalTick keyevent={handleKeyPress} setEachNote={setEachNote} eachNote={eachNote} />
            {noteItems.map((note: any) => {
              return <ShowTick SavedData={note} />;
            })}
          </div>
          <div className="modal-menu">
            <li onClick={storeItems}>Save</li>
            <li onClick={() => console.log(eachNote)}>Cancel</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewModal;
