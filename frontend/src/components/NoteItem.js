import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'


function NoteItem(props) {
	const { note,updateNote } = props;

	const context = useContext(noteContext)
	const { deleteNote } = context

	return (
		<div className='col-md-3 my-3'>
			<div className="card">
				<div className="card-body">
					<div className="d-flex align-items-center">
						<h5 className="card-title">{note.title}</h5>
						<i className="fa fa-pen-to-square mx-2" style={{ color: '#000000' }} onClick={()=>{updateNote(note)}}></i>
						<i className="fa fa-trash mx-2" style={{ color: '#000000' }} onClick={()=>{deleteNote(note._id)}}></i>
					</div>
					<p className="card-text">{note.description}</p>
					<p className="card-text">{note.tag}</p>
				</div>
			</div>
		</div>
	)
}

export default NoteItem