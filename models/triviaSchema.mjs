import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    questions: {type: String, required: true},
    options: {type: String, required: true},
    correctAnswer: {type: String, required: true},
});

questionSchema.index({question: 1});

export default mongoose.model('Question', questionSchema);
