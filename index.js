'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3333;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    console.log('Established a connection to the database');
    server.start(PORT);
  })
  .catch(err => console.error('Something went wrong when connecting to the database', err));