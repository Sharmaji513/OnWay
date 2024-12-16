const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');


app.use(cors())

//Database 
connectToDb()

//Testing Route
app.get('/' , (req,res) =>{
    res.send("Testing route")
})


module.exports = app;