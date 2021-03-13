'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('./auth/router.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(userRoutes);

module.exports = {
  app:app,
  start: port => {
    app.listen(port, () => console.log(`Listening to port ${port}` ));
  }
}