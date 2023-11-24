import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import peopleRoutes from './routes/people.js'

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());



app.use('/people',peopleRoutes);




const CONNECTION_URL = "mongodb://127.0.0.1:27017/DB";
console.log(CONNECTION_URL);
mongoose.connect(CONNECTION_URL)
.then(function(){
    app.listen(4000,() => console.log("server started on port " + 4000));
})
.catch((err) => console.log(err.message + "\nMongo db connection error"));

