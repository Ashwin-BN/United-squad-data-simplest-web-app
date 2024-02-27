/*-----------------------------------------------------------------
NAME: Ashwin B N
STUDENT_ID: 112763222
------------------------------------------------------------------*/
// Importing Express, Path and fs modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// app object
const app = express();

// Assigning PORT
const HTTP_PORT = process.env.PORT || 8080;

// Reading data from JSON file synchronously and parsing it into JavaScript object
const data = JSON.parse(fs.readFileSync('data/data.json'));

// Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for api/data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Route for api/data/:id
app.get('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Requested Jersey Number: ', id);
    const entry = data.find(item => item.jerseyNo === id);

    if (entry) {
        res.json(entry);
    } else {
        res.status(404).send(`Requested jerseyNo:${id} NOT FOUND !!!`);
    }
});

app.listen(HTTP_PORT, () => {
    console.log(`Server is running on http://localhost:${HTTP_PORT}`);
});
