const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express(); 

app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 5000; // Use const for Port

const dbConnection = require('./config/database');
dbConnection();

// Import routes and mount them
const newClient = require("./routes/client");
app.use('/api/v1', newClient);

// Listen on server
app.listen(Port, () => {
    console.log(`Server is listening at Port number ${Port}`);
});

// Default router
app.get('/', (req, res) => {
    res.send("Default Router for home screen");
});
