import React from 'react'
import AllNotes from './AllNotes'
import AddNote from './AddNote'
function Home() {

	return (
		<>
			{/* Add Note */}
			<AddNote />

			{/* Fetching Notes */}
			<AllNotes />
		</>
	)
}

export default Home