import { MongoClient } from 'mongodb';
<<<<<<< Updated upstream
import { getCustomSession } from '../sessionCode.js';

export async function POST(req) {
  //Parse the request body to get email and password
  const { email, password } = await req.json();

  console.log('Mongo URI:', process.env.MONGO_URI);



  const url = process.env.MONGO_URI;
  const client = new MongoClient(url);
  const dbName = 'app';

  try {
    // connect to DB and get the user collection
=======
import { getCustomSession } from '../sessionCode.js'; // Import session management function

export async function POST(req) {
  // Parse the request body to get email and password
  const { email, password } = await req.json();

  // Use environment variable for MongoDB URI
  const url = process.env.MONGO_URI;
  const client = new MongoClient(url);
  const dbName = 'app'; // Database name

  try {
    // Connect to MongoDB and get the user collection
>>>>>>> Stashed changes
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('login');

<<<<<<< Updated upstream
    //check if a user exists with the given email
    const user = await collection.findOne({ email });

    //validate the password and create a session if valid
=======
    // Check if a user exists with the given email
    const user = await collection.findOne({ email });

    // Validate the password and create a session if valid
>>>>>>> Stashed changes
    if (user && user.pass === password) {
      const session = await getCustomSession(req); // Create session
      session.email = user.email; // Save email in session
      session.role = user.acc_type; // Save role in session
      await session.save(); // Save session

      return new Response(JSON.stringify({ message: 'Login successful', role: user.acc_type }), {
        status: 200,
      });
    }

<<<<<<< Updated upstream
    //return an error if credentials are invalid
=======
    // Return an error if credentials are invalid
>>>>>>> Stashed changes
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  } finally {
<<<<<<< Updated upstream
    await client.close();
=======
    await client.close(); // Always close the MongoDB connection
>>>>>>> Stashed changes
  }
}

