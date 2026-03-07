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
const serveTopGifs = async (req, res) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`;
        const response = await fetch(url);

        if(!response.ok){
            throw Error(`Failed fetch. ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(503).json({ error: error.message });
    }
}

app.get('/api/gifs', serveTopGifs);
app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 