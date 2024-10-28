import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Create connection string
const connectionString = process.env.mongoURI;

const client = new MongoClient(connectionString);

export default async function connectDB() {
    try {
        await mongoose.connect(connectionString);
        console.log(`MongoDB Connected...`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
