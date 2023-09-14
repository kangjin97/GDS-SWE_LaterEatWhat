import express from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import { Suggestion } from "./models/eatSession.js";
import suggestionsRoute from './routes/suggestionsRoute.js';
import cors from 'cors';

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for CORS policy
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to GDS Challenge");
});

app.use('/suggest', suggestionsRoute);

mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });