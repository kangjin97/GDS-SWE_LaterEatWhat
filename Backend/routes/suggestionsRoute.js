import express from "express";
import { Suggestion } from "../models/eatSession.js";

const router = express.Router();

// Route for saving a new suggestion 
// smart update if record already added based on name
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.suggestion
        ) {
            return res.status(400).send({
                message: 'Please input name and suggestion!',
            });
        };

        const name = req.body.name;
        const suggestion = req.body.suggestion;
        const newSuggestion = {
            name: name,
            suggestion: suggestion,
        };

        const opts = { upsert: true, new: true }
        const results = await Suggestion.findOneAndUpdate({ name: name }, { suggestion: suggestion}, opts);
        
        return res.status(201).send(results);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

// Route for Get all suggestions from database
router.get('/', async(req, res) => {
    try {
        const results = await Suggestion.find({});
        return res.status(200).json({
            count: results.length,
            data: results,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

// Route for deleting a record by ID
router.delete('/:id', async (req, res) => {

    try {
        const {id} = req.params;
        const results = await Suggestion.findByIdAndDelete(id);

        if (!results) {
            return res.status(404).json({message: "Suggestion not found"});
        }
    
        return res.status(200).json({message: "Suggestion removed successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

// Route for deleting all records
router.delete('/', async (req, res) => {

    try {
        const results = await Suggestion.deleteMany();

        if (!results) {
            return res.status(404).json({message: "Error deleting records"});
        }
    
        return res.status(200).json({message: "Suggestions removed successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

export default router;