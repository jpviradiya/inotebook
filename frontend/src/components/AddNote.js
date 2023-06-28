import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
	const context = useContext(noteContext)
	const { addNote } = context

	const [note, setNote] = useState({ title: "", description: "", tag: "" })

	const handleClick = (e) => {
		e.preventDefault()
		addNote(note.title,note.description,note.tag)
	}
	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value })
	}

	return (
		<div className="container my-3">
			<h2>Add your notes</h2>
			<form>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">Title</label>
					<input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
					<div id="titleHelp" className="form-text">We'll never share your notes with anyone else.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">Description</label>
					<textarea className="form-control" id="description" name='description' rows={5} onChange={onChange}></textarea>
				</div>
				<div className="mb-3">
					<label htmlFor="tag" className="form-label">Tag</label>
					<input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" onChange={onChange} />
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
			</form>
		</div>
	)
}

export default AddNote