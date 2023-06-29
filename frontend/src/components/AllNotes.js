import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'


function Notes() {
	const context = useContext(noteContext)
	const { notes, getAllNotes, editNote } = context
	const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

	useEffect(() => {
		getAllNotes()
		// eslint-disable-next-line
	}, [])
	const ref = useRef(null)
	const refclose = useRef(null)
	const updateNote = (currentNote) => {
		ref.current.click()
		setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
	}

	const handleClick = (e) => {
		editNote(note.id, note.etitle, note.edescription, note.etag)
		refclose.current.click()
	}
	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value })
	}

	return (
		<>
			{/* hidden button */}
			<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Launch demo modal
			</button>
			<h2>Your notes</h2>
			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Update Your Note</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label htmlFor="title" className="form-label">Title</label>
									<input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
									<div id="titleHelp" className="form-text">We'll never share your notes with anyone else.</div>
								</div>
								<div className="mb-3">
									<label htmlFor="description" className="form-label">Description</label>
									<textarea className="form-control" id="edescription" name='edescription' rows={5} value={note.edescription} onChange={onChange}></textarea>
								</div>
								<div className="mb-3">
									<label htmlFor="tag" className="form-label">Tag</label>
									<input type="text" className="form-control" id="etag" name='etag' aria-describedby="emailHelp" value={note.etag} onChange={onChange} />
								</div>
								{/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button> */}
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row my-3">
				<div className="container mx-2">
					{notes.length===0 && "No notes to display"}
				</div>
				{
					notes.map((note) => {
						return <NoteItem key={note._id} updateNote={updateNote} note={note} />
					})
				}
			</div>
		</>
	)
}

export default Notes