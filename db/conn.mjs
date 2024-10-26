import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

// Create connection string
let connectionString = process.env.atlasURI || '';

const client = new MongoClient(connectionString);

// Variable to hold connection info
let conn;

try {
    // Try to connect to client
    conn = await client.connect();
    console.log(`MongoDB connected`);
} catch (err) {
    console.error(err);
}

let db = conn.db('spookyTriviaGame');

export default db;
