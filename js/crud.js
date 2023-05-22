import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const uri = process.env.URI_MONGODB;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Crear una instancia del objeto Mongo CLiente
const client = new MongoClient(uri);

//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */

//This async function inserts a new document into the 'users' collection in the 'USUARIOS' database.

async function run_insert() {
  try {
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');
      
    
    const userDocument = {
        name: "Samuel",
        Age: 78,
        Signo: "Capricornio"
    };


    const userResult = await Products.insertOne(userDocument);
    console.log(userResult);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */

//This async function inserts a new document into the 'users' collection in the 'USUARIOS' database.

async function run_insertMany() {
  try {
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');
      
    
    const userDocument = [
      { "_id": 1, "name": "Pan", "cantidad": 10 },
      { "_id": 2, "name": "Jabón", "cantidad": 8 },
      { "_id": 3, "name": "Bolsas", "cantidad": 5 },
      { "_id": 4, "name": "Pollo", "cantidad": 16 },
    ]

    const userResult = await Products.insertMany(userDocument);
    console.log(userResult);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */

// Function to retrieve the document count
async function getDocumentCount() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the database and collection
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');

    // Get the document count
    const count = await Products.countDocuments();

    // Print the result
    console.log(`Number of documents in the collection Products is: ${count}`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */

// Function to retrieve documents one by one
async function getDocuments() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the database and collection
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');

    // Find all documents in the collection
    const cursor = Products.find();

    // Iterate over the documents
    while (await cursor.hasNext()) {
      const document = await cursor.next();
      console.log(document);
      console.log("------");
      // Process the document as needed
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */

// Function to retrieve a specific document
async function getDocumentByParameter(parameterValue) {
  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the database and collection
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');

    // Find the document by its ID
    const document = await Products.findOne(parameterValue);
        
    console.log(document);
    // Process the document as needed
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */


async function deleteDocument(documentId) {
  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the database and collection
    const database = client.db('WISH_LIST');
    const Products = database.collection('Products');


    // Delete the document by its ID
    const result = await Products.deleteOne(documentId);
    console.log(`${result.deletedCount} document(s) deleted`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}


//run_insert().catch(console.dir);
//run_insertMany().catch(console.dir);
//getDocumentCount();
//getDocuments();
//getDocumentByParameter({name: "Jabón"});
//deleteDocument({ _id: 2 });

//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */
//**************************************************************************************** */


////////////////////////////////////////////////////////////

let documentQty = getDocumentCount();
console.log(documentQty);