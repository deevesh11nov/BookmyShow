const express = require("express");
const app = express(); //constants
const mongodb = require('mongodb');
require('dotenv').config();
let mongoose = require('mongoose');

/** function will check app is running on local server or live */
const isProduction = () => {
  return process.env.NODE_ENV === "production" ? true : false;
  };
  
const mongoURI = isProduction() ? process.env.MONGODBLIVE: process.env.MONGODBURI;

const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model(process.env.COLLECTION_NAME, bookMovieSchema)


exports.connection = collection_connection;
