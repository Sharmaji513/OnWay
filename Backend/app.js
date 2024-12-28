const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



//Database 
connectToDb()


//router
app.use('/users' , userRoutes)
app.use('/captains', captainRoutes);




//Testing Route
app.get('/' , (req,res) =>{
    res.send("Testing route")
})


module.exports = app;