import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
});

userSchema.index({email: 1});

export default mongoose.model('User', userSchema);
