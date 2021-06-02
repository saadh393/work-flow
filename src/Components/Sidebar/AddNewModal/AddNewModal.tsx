import CreateTick from "./CreateTick";
import { NoteProvider } from "../../../util/interfaces";
import "./AddNewModal.css";
import React from "react";
import { useToggleEvents } from "../../../App";
import ShowTick from "./ShowTick";

const AddNewModal = () => {
  const { noteItems, setNoteItem } = useToggleEvents();
  const [eachNote, setEachNote] = React.useState<NoteProvider>({
    id: noteItems.length,
    note: undefined,
    checked: false,
  });

  function storeData() {
    const randomNumber: number = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000);
    let newNote = { id: randomNumber, ...eachNote };
    eachNote.note && setNoteItem([...noteItems, newNote]);
    setEachNote({ id: randomNumber, note: undefined });
    console.log(newNote);
    console.log(noteItems);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      storeData();
    }
  };

  const storeItems = () => {
    storeData();
  };

  const updateCheck = (checked: boolean, id: number | null) => {
    let copyNoteItem: NoteProvider[] = [...noteItems];
    let index = copyNoteItem.findIndex((obj) => obj?.id === id);
    if (copyNoteItem[index].id === id) {
      copyNoteItem[index].checked = checked;
    }
    setNoteItem(copyNoteItem);
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-card">
          <input type="text" placeholder="Title" className="title" />
          <div className="description">
            <CreateTick keyevent={handleKeyPress} setEachNote={setEachNote} eachNote={eachNote} />

            {[...noteItems].reverse().map((note: any) => {
              return <ShowTick SavedData={note} updateCheck={updateCheck} />;
            })}
          </div>
          <div className="modal-menu">
            <li onClick={storeItems}>Save</li>
            <li onClick={() => console.log(noteItems)}>Cancel</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewModal;
