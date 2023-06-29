import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const host = "http://localhost:5000"
	const notesInitial = []

	const [notes, setNotes] = useState(notesInitial)

	// Get all Notes
	const getAllNotes = async (title, description, tag) => {

		// API call
		const response = await fetch(`${host}/api/notes/fetch`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmUyNzEyZTM1YTRmOTc0NWU5YTU1In0sImlhdCI6MTY4NzkzNzY0OX0.vqGk3Az2mJQIQQ6XH5HcCF4w4o0rQMzOCJFdEybUDhM"
			}
		});
		const allnote = await response.json()
		setNotes(allnote)
	}
	// Add Note
	const addNote = async (title, description, tag) => {

		// API call
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmUyNzEyZTM1YTRmOTc0NWU5YTU1In0sImlhdCI6MTY4NzkzNzY0OX0.vqGk3Az2mJQIQQ6XH5HcCF4w4o0rQMzOCJFdEybUDhM"
			},
			body: JSON.stringify({ title, description, tag }),
		});

		//note data
		const note = await response.json()
		setNotes(notes.concat(note))
	}

	// Delete Note
	const deleteNote = async (id) => {
		// API call
		// eslint-disable-next-line
		const response = await fetch(`${host}/api/notes/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmUyNzEyZTM1YTRmOTc0NWU5YTU1In0sImlhdCI6MTY4NzkzNzY0OX0.vqGk3Az2mJQIQQ6XH5HcCF4w4o0rQMzOCJFdEybUDhM"
			}
		});
		const deletenote = notes.filter((note) => { return note._id !== id })
		setNotes(deletenote)
	}

	// Edit Note
	const editNote = async (id, title, description, tag) => {
		// API call
		// eslint-disable-next-line
		const response = await fetch(`${host}/api/notes/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmUyNzEyZTM1YTRmOTc0NWU5YTU1In0sImlhdCI6MTY4NzkzNzY0OX0.vqGk3Az2mJQIQQ6XH5HcCF4w4o0rQMzOCJFdEybUDhM"
			},
			body: JSON.stringify({ title, description, tag }),
		});

		let updatedNotes=JSON.parse(JSON.stringify(notes))
		//change note for client
		for (let index = 0; index < updatedNotes.length; index++) {
			const element = updatedNotes[index];
			if (element._id === id) {
				updatedNotes[index].title = title
				updatedNotes[index].description = description
				updatedNotes[index].tag = tag
				break;
			}
		}
		setNotes(updatedNotes)
	}

	return (
		<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState;