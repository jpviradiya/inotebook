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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
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
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
			"tag": "personal",
			"date": "2023-06-25T12:49:17.938Z",
			"__v": 0
		},
		{
			"_id": "649837cd7c7bb5e9cbc5854d",
			"user": "6498351dd11e044f3c1cf92f",
			"title": "ami viradiya",
			"description": "Hello ami viradiya how are you",
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
	return (
		<NoteContext.Provider value={{notes,setNotes}}>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState;