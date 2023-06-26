const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Route 1:Fetch all notes for loggedin a User using: GET "/api/notes/fetch". Require login
router.get('/fetch', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

//Route 2:Add notes for loggedin a User using: POST "/api/notes/addnote". Require login
router.post('/addnote', fetchuser, [body('title', 'Enter valid title').isLength({ min: 5 }), body('description', "Description length should be between 20 to 200 character").isLength({ min: 20, max: 200 }), body('tag', 'Enter a valid tag').isLength({ min: 1 })], async (req, res) => {

    try {
        const { title, description, tag } = req.body
        //Check validation
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const note = await Notes.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

//Route 3: Update notes for loggedin a User using: PUT "/api/notes/update/:id". Require login
//! here  is id of an perticular note of that loggedin user
router.put('/update/:id', fetchuser, [body('title', 'Enter valid title').isLength({ min: 5 }), body('description', "Description length should be between 20 to 200 character").isLength({ min: 20, max: 200 }), body('tag', 'Enter a valid tag').isLength({ min: 1 })], async (req, res) => {
    try {
        //create an updateNote object which contain info about updated note
        const { title, description, tag } = req.body
        const updatedNote = {}
        if (title) { updatedNote.title = title }
        if (description) { updatedNote.description = description }
        if (tag) { updatedNote.tag = tag }

        //find note and then delete it.
        let note = await Notes.findById(req.params.id)
        if (!note) { return res.status(404), send("not found") }

        //Allow update only if yuser own this
        if (note.user.toString() !== req.user.id) {
            return res.status(401), send("Not Allow")
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: updatedNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})


//Route 4: Delete notes for loggedin a User using: DELETE "/api/notes/delete/:id". Require login
//! here  is id of an perticular note of that loggedin user
router.delete('/delete/:id', fetchuser, async (req, res) => {

    try {
        //create an updateNote object which contain info about updated note
        const updatedNote = {}
        if (title) { updatedNote.title = title }
        if (description) { updatedNote.description = description }
        if (tag) { updatedNote.tag = tag }

        //find note and then update it.
        let note = await Notes.findById(req.params.id)
        if (!note) { return res.status(404), send("not found") }

        //Allow deletion only if yuser own this
        if (note.user.toString() !== req.user.id) {
            return res.status(401), send("Not Allow")
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Sucess": "delete successfully", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

module.exports = router