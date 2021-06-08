import CreateTick from "./CreateTick";
import { ModalVisibility, NoteProvider } from "../../../util/interfaces";
import "./AddNewModal.css";
import React, { useState } from "react";
import { useToggleEvents } from "../../../App";
import ShowTick from "./ShowTick";
import { setNote } from "../../../util/firestore";

const AddNewModal = ({ isVisible, setIsVisible }: ModalVisibility) => {
  const { todos, setTodo } = useToggleEvents();
  const [title, setTitle] = useState("");
  const [noteItems, setNoteItem] = React.useState<NoteProvider[]>([]);
  const [eachNote, setEachNote] = React.useState<NoteProvider>({
    id: noteItems.length,
    note: undefined,
    checked: false,
  });

  const handleChange = (e: any) => {
    setEachNote({ ...eachNote, note: e.target.value });
  };

  const storeData = (callback: Function) => {
    console.log(noteItems.length);
    if (!eachNote.note && noteItems.length === 0) {
      return;
    }
    let processToDo;
    if (eachNote.note) {
      const randomNumber: number = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000);
      let newNote = { id: randomNumber, ...eachNote };
      processToDo = [...noteItems, newNote];
      setNoteItem([...noteItems, newNote]);
      setEachNote({ id: randomNumber, note: "" });
    } else {
      processToDo = [...noteItems];
    }
    callback(processToDo);
  };

  const storeItems = () => {
    storeData((processToDo: any) => {
      console.log(processToDo);
      setNote({ title, noteItems: processToDo });
      setTodo([...todos, { title, noteItems: processToDo }]); // Final State for Todo Card
      setTitle("");
      setNoteItem([]);
      setEachNote({ id: 0, note: "", checked: false });
      setIsVisible(!isVisible);
    });
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      storeData(() => {});
    }
  };

  const handleCancel = () => {
    setIsVisible(!isVisible);
    setNoteItem([]);
    setEachNote({ id: noteItems.length, note: undefined, checked: false });
  };

  const updateCheck = (checked: boolean, id: number | null) => {
    let copyNoteItem: NoteProvider[] = [...noteItems];
    let index = copyNoteItem.findIndex((obj) => obj?.id === id);
    if (copyNoteItem[index].id === id) {
      copyNoteItem[index].checked = checked;
    }
    setNoteItem(copyNoteItem);
  };

  const updateNote = (note: string, id: number | null) => {
    let copyNoteItem: NoteProvider[] = [...noteItems];
    let index = copyNoteItem.findIndex((obj) => obj?.id === id);
    if (copyNoteItem[index].id === id) {
      copyNoteItem[index].note = note;
    }
    setNoteItem(copyNoteItem);
  };

  return (
    <>
      <div className="modal-wrapper" style={{ display: isVisible ? "" : "none" }}>
        <div className="modal-card">
          <input
            type="text"
            placeholder="Title"
            className="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="description">
            <CreateTick
              keyevent={handleKeyPress}
              setEachNote={setEachNote}
              eachNote={eachNote}
              handleChange={handleChange}
            />

            {[...noteItems].reverse().map((note: any) => {
              return <ShowTick SavedData={note} updateCheck={updateCheck} updateNote={updateNote} />;
            })}
          </div>
          <div className="modal-menu">
            <li onClick={storeItems}>Save</li>
            <li onClick={handleCancel}>Cancel</li>
            {/* <li onClick={() => console.log(todos)}>Todos</li>
            <li onClick={() => console.log(noteItems)}>Notes</li>
            <li onClick={() => console.log(eachNote)}>Typing</li>
            <li onClick={() => storeData(() => {})}>Store</li> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewModal;
