import express from 'express';
import Score from '../models/scoresSchema.mjs';


const router = express.Router();


// Create Scores Questions
router.post('/', async (req, res) => {
    try {
        const newScore = new Score(req.body);
        await newScore.save();
        res.json(newScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Read All Scores
router.get('/', async (req, res) => {
    try {
        const allScores = await Score.find({});
        res.json(allScores);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a Score
router.put('/:id', async (req, res) => {
    try {
        let updatedScores = await Score.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedScores);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Delete a Score
router.delete('/:id', async (req, res) => {
    try {
        let deletedScores = await Score.findByIdAndDelete(req.params.id);
        res.json(deletedScores);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;
