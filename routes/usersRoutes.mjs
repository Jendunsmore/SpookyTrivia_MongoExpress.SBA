import express from 'express';
import User from '../models/usersSchema.mjs';

const router = express.Router();

// Create Users
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Read All Users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a User
router.put('/:id', async (req, res) => {
    try {
        let updatedUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Delete a Users
router.delete('/:id', async (req, res) => {
    try {
        let deletedUsers = await User.findByIdAndDelete(req.params.id);
        res.json(deletedUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;
