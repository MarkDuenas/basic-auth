'use strict';

require('@code-fellows/supergoose');

const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);
const base64 = require('base-64');

describe('Basic Auth Tests', () => {

  it('should create a new user on /signup route', async () => {
    let newUser = { username: "Jake", password: "12345" };

    await mockRequest.post('/signup').send(newUser)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.username).toEqual('Jake');
      })
  });

  it('should login in as a user on /signin route', async () => {
    let newUser64 = base64.encode('Jake:12345');

    await mockRequest.post('/signin').set('authorization', newUser64)
      .then(results => {
        expect(results.body.username).toEqual('Jake');
      })
  });

  it('should respond with 500 error on an empty header', async () => {

    await mockRequest.post('/signin').set('authorization', '')
      .then(results => {
        expect(results.status).toEqual(500);
      })
  });

});