import React from 'react'
import AllNotes from './AllNotes'
import AddNote from './AddNote'
function Home(props) {

	const {showAlert}= props
	return (
		<>
			{/* Add Note */}
			<AddNote showAlert={showAlert} />

			{/* Fetching Notes */}
			<AllNotes showAlert={showAlert} />
		</>
	)
}

export default Home