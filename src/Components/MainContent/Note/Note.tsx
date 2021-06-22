/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useToggleEvents } from "../../../App";
import { getNotes, updateFirebaseNote } from "../../../util/firestore";
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

	const updateCheck = () => {};
	const updateNote = () => {};
	const handleCancel = () => {
		history.push("/");
	};

	const deleteItem = (id: number | null) => {
		const Data = [...EachNote.noteItems].filter((todo: any) => todo.id !== id);
		const newNoteToUpdate = { ...EachNote, noteItems: Data };
		setEachNote(newNoteToUpdate);
		// updateFirebaseNote(newNoteToUpdate);

		const newTodo = [...todos].filter((todo: any) => todo.id == newNoteToUpdate.id);
		const RestTodo = [...todos].filter((todo: any) => todo.id != newNoteToUpdate.id);
		console.log([...RestTodo, ...newTodo]);
		//setTodo([...RestTodo, ...newTodo]);
	};

	return (
		<>
			<div className='modal-wrapper'>
				<div className='modal-card'>
					{EachNote && <input type='text' placeholder='Title' className='title' value={EachNote.title} />}
					<p>Hello</p>
					<div className='description'>
						{EachNote &&
							[...EachNote.noteItems].reverse().map((note: any) => {
								return (
									<ShowTick
										SavedData={note}
										updateCheck={updateCheck}
										updateNote={updateNote}
										deleteItem={deleteItem}
										deleteVisible={true}
									/>
								);
							})}
					</div>
					<div className='modal-menu'>
						<li onClick={handleCancel}>Dissmiss</li>
						<li onClick={handleCancel}>Delete</li>
					</div>
				</div>
			</div>
		</>
	);
};

export default Note;
