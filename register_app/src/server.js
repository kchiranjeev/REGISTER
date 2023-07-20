const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// Create a new Pool instance for connecting to PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'regi',
    password: '9703324255',
    port: 5432,
});

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/register', async(req, res) => {
    try {
        const { Firstname, Lastname, gender, email, MobailNumber, password } = req.body;

        // Insert the form data into the PostgreSQL table
        const query = 'INSERT INTO users (firstname, lastname, gender, email, mobailnumber, password) VALUES ($1, $2, $3, $4, $5, $6)';
        const values = [Firstname, Lastname, gender, email, MobailNumber, password];
        await pool.query(query, values);

        res.status(200).send('Form data saved successfully!');
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).send('An error occurred while saving the form data.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});