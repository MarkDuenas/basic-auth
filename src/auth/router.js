'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = express.Router();

const signinVerification = require('./middleware/basic.js');

const Users = require('./models/users-model');

userRouter.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (error) { res.status(403).send('Error Creating User'); }

});

userRouter.post('/signin', signinVerification, (req, res) => {
  res.status(200).json(req.thisUser);
});

module.exports = userRouter;