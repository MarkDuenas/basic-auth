'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');

const Users = require('../models/users-model.js');

module.exports = async (req, res, next) => {

  if(!req.headers.authorization) {
    res.status(500).json({error:"Username and Password are incorrect."})
  }

  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');


  try{
    const user = await Users.findOne({ username: username});
    const valid = await bcrypt.compare(password, user.password);
 
    if(valid) {
      req.thisUser = user;
      next();
    } else {
      throw new Error('Invalid User')
    }
  } catch { res.status(403).send("Invalid Login"); }
};
