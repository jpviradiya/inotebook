import React from 'react'

function NoteItem(props) {
	const { note } = props;
	return (
		<div className='col-md-3 my-3'>
			<div className="card">
				<div className="card-body">
					<div className="d-flex align-items-center">
						<h5 className="card-title">{note.title}</h5>
						<i className="fa fa-pen-to-square mx-2" style={{ color: '#000000' }}></i>
						<i className="fa fa-trash mx-2" style={{ color: '#000000' }}></i>
					</div>
					<p className="card-text">{note.description}</p>
				</div>
			</div>
		</div>
	)
}

export default NoteItem