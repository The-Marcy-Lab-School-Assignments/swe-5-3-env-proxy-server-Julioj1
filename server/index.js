//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToFrontend);

app.get('/api/gifs', async(req, res) =>{
    try {
        const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`;
        const response = await fetch(url);

        if(!response.ok) throw Error(`Failed fetch. ${response.status} ${response.statusText}`);

        const data = await response.json();
        res.json(data.data);
    } catch (error) {
        res.status(503).json({ error: error.message });
    }
});

//endpoint for the search function
app.get('/api/gifs/search', async (req, res) => {
  try {
    const { q } = req.query;

    const url = `https://api.giphy.com/v1/gifs/search?limit=3&rating=g&q=${q}&api_key=${process.env.API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Failed search. ${response.status} ${response.statusText}`);

    const data = await response.json();
    res.json(data.data);
  } catch (error) {
    res.status(503).json({ error: error.message });
  }
});

app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 