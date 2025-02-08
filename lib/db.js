let MongoClient;
try {
  MongoClient = require('mongodb').MongoClient;
} catch (e) {
  console.error('Failed to load mongodb module:', e);
  MongoClient = null;
}

if (!MongoClient) {
  throw new Error('Please install the mongodb package');
}

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Ensure the MongoDB URI is correctly parsed and used
if (typeof uri !== 'string' || !uri.startsWith('mongodb')) {
  throw new Error('Invalid MongoDB URI');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getProfileData() {
  const client = await clientPromise;
  const db = client.db('gimmegig');
  const profile = await db.collection('profiles').findOne({});
  if (!profile) {
    throw new Error('Profile not found');
  }
  try {
    return profile; // Return the profile object directly
  } catch (e) {
    throw new Error('Failed to parse profile data as JSON');
  }
}
