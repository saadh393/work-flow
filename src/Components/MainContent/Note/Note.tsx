import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { useToggleEvents } from "../../../App";
import { getNotes } from "../../../util/firestore";
import ShowTick from "../../Sidebar/AddNewModal/ShowTick";
import "./Note.css";

type NoteParam = {
  Noteid: string;
};

const Note = () => {
  let { Noteid } = useParams<NoteParam>();
  const [EachNote, setEachNote] = useState<any>();
  const { todos, setTodo } = useToggleEvents();
  const history = useHistory();

  useEffect(() => {
    const newNote = getNotes();
    newNote.then((res) => {
      const Data = [...res].filter((todo: any) => todo.id == Noteid);
      setEachNote(Data[0]);
    });
  }, []);

  console.log(EachNote);

  const updateCheck = () => {};
  const updateNote = () => {};
  const handleCancel = () => {
    history.push("/");
  };

  const deleteItem = (id: number | null) => {};

  return (
    <>
      <div className='modal-wrapper'>
        <div className='modal-card'>
          {EachNote && <input type='text' placeholder='Title' className='title' value={EachNote.title} />}
          <div className='description'>
            {/* <CreateTick
              keyevent={handleKeyPress}
              setEachNote={setEachNote}
              eachNote={eachNote}
              handleChange={handleChange}
            /> */}

            {EachNote &&
              [...EachNote.noteItems].reverse().map((note: any) => {
                return (
                  <ShowTick
                    SavedData={note}
                    updateCheck={updateCheck}
                    updateNote={updateNote}
                    deleteItem={deleteItem}
                    deleteVisible={false}
                  />
                );
              })}
          </div>
          <div className='modal-menu'>
            {/* <li onClick={storeItems}>Save</li> */}
            <li onClick={handleCancel}>Dissmiss</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
