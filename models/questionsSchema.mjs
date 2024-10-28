import mongoose from 'mongoose';

const questionsSchema = new mongoose.Schema({
    questions: {type: String, required: true},
    options: {type: String, required: true},
    correctAnswer: {type: String, required: true},
});

questionsSchema.index({question: 1});

export default mongoose.model('Question', questionsSchema);
