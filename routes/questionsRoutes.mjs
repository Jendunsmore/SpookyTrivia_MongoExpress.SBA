import express from 'express';
import Question from '../models/questionsSchema.mjs';


const router = express.Router();


// Create Trivia Questions
router.post('/', async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.json(newQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Read All Questions
router.get('/', async (req, res) => {
    try {
        const allQuestions = await Question.find({});
        res.json(allQuestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a Question
router.put('/:id', async (req, res) => {
    try {
        let updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Delete a Question
router.delete('/:id', async (req, res) => {
    try {
        let deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        res.json(deletedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;
