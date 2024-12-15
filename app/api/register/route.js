import { MongoClient } from 'mongodb';

export async function POST(req) {
<<<<<<< Updated upstream
  //request body to get email, password, and account type
  const { email, password, acc_type } = await req.json();


  const url = process.env.MONGO_URI;
  const client = new MongoClient(url);
  const dbName = 'app';

  try {
    //connect to DB and get the user collection
=======
  // Parse the request body to get email, password, and account type
  const { email, password, acc_type } = await req.json();

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
    //check if a user with the same email already exists
=======
    // Check if a user with the same email already exists
>>>>>>> Stashed changes
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400 });
    }

<<<<<<< Updated upstream
    //create a new user
    const newUser = {
      email,
      pass: password,
      acc_type: acc_type || 'customer', //default to customer
    };

    //insert the new user into the collection
=======
    // Create a new user object
    const newUser = {
      email,
      pass: password,
      acc_type: acc_type || 'customer', // Default to 'customer' if no account type is provided
    };

    // Insert the new user into the collection
>>>>>>> Stashed changes
    await collection.insertOne(newUser);

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error registering user:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  } finally {
<<<<<<< Updated upstream
    await client.close();
=======
    await client.close(); // Always close the MongoDB connection
>>>>>>> Stashed changes
  }
}

