// Import the necessary modules
const express = require('express');  // Import the Express framework
const app = express();  // Create an Express application
const port = 4000;  // Define the port number on which the server will listen

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configure and use the body-parser middleware to handle request data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Root route that responds with "Hello World!" for a GET request to the root URL ("/")
app.get('/', (req, res) => 
{
    res.send('Hello World!');
});

// Route "/api/books" that responds with a personalized message based on JSON data from a POST request
app.post('/api/books', (req, res) => 
{
    console.log(req.body);
    res.send('Hello , Data Recieved!');
});

// Route "/api/books" with a JSON response containing a list of books for a GET request
app.get('/api/books', (req, res) => 
{
    const data = [
        // Array of book objects
        // Each object contains book details
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    res.json({
        myBooks: data,
        "Message": "Hello from server.js",
        "Status":"Happy"
    });
});

// Start the Express server and listen on the specified port
app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}`);
});