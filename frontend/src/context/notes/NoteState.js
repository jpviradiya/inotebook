import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const notesInitial = [
		{
			"_id": "649837cd7c7bb5e9cbc5854c",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "jeel viradiya",
			"description": "Hello jeel viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "jeel viradiya",
			"description": "Hello jeel viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		}
	]
	const [notes, setNotes] = useState(notesInitial)

	// Add Note
	const addNote = (title, description, tag) => {
		const note = {
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": title,
			"description": description,
			"tag": tag,
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		}
		setNotes(notes.concat(note))
	}

	// Delete Note
	const deleteNote = (id) => {
		console.log(id)
		const deletenote = notes.filter((note)=>{return note._id!==id})
		setNotes(deletenote)
	}

	// Edit Note
	const editNote = (id,title,description,tag) => {
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];
				if (element._id===id) {
					element.title=title
					element.description=description
					element.tag=tag
				}
		}
	}

	return (
		<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState;