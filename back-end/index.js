import express from 'express'; // Import express 
import cors from 'cors'; // Import cors
import generate from './controllers/generate.js'; // Import the generate function

const app = express(); // Create an express app
app.use(express.json()); // Use the json middleware
app.use(cors()); // Use cors

const port = process.env.PORT || 3005; // Set the port

app.get('/', (req, res) => { // Create a route
    res.send('Hello World!'); // Send a response
});

app.listen(port, () => { // Start the server
    console.log(`Server is running on port ${port}`); // Log a message
});

app.post('/generate', async (req, res) => { // Create a route
    const { queryDescription } = req.body; // Get the question from the request body
    try {
        const roadQuery = await generate(queryDescription);
        res.json({respose: roadQuery})
    } catch (error) {
        console.error(error); // Log an error
        res.status(500).send('An error occurred'); // Send an error response
    }
});
