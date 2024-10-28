// Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import questionsRoutes from './routes/questionsRoutes.mjs';
import connectDB from './db/conn.mjs';
import usersRoutes from './routes/usersRoutes.mjs';
import scoresRoutes from './routes/scoresRoutes.mjs';
//import { questions, users, scores } from './data/data.mjs';
//import Question from './models/questionsSchema.mjs';
//import User from './models/usersSchema.mjs';
//import Score from './models/scoresSchema.mjs';



// Setups
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.use(express.json());

// Routes
app.use('/questions', questionsRoutes);
app.use('/users', usersRoutes);
app.use('/scores', scoresRoutes);

// Listener
app.listen(PORT, ()=>{
    console.log(`Server Running on Port: ${PORT}`)
});
