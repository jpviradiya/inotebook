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
		setNotes(await response.json())
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
		const note = {
			"_id": "649be76e05e5a1912b253ed7",
			"user": "649be2712e35a4f9745e9a55",
			"title": title,
			"description": description,
			"tag": tag,
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		}
		setNotes(notes.concat(note))
	}

	// Delete Note
	const deleteNote = async (id) => {
		// API call
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
		const response = await fetch(`${host}/api/notes/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmUyNzEyZTM1YTRmOTc0NWU5YTU1In0sImlhdCI6MTY4NzkzNzY0OX0.vqGk3Az2mJQIQQ6XH5HcCF4w4o0rQMzOCJFdEybUDhM"
			},
			body: JSON.stringify({ title, description, tag }),
		});

		//change note for client
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];
			if (element._id === id) {
				element.title = title
				element.description = description
				element.tag = tag
			}
		}
	}

	return (
		<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState;