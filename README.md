# Basic Authorization

### Author: Mark Duenas

[Test Reports](https://github.com/MarkDuenas/basic-auth/actions)

[Deployed Link](https://basic-auth-md.herokuapp.com/)

[Pull Req](https://github.com/MarkDuenas/basic-auth/pull/1)


## Set up

`.env` requirements

  - PORT - Port Number
  -MONGODB_URI - MongoDB URI

Node.js installed

MongoDB installed

  ### Running the app
   - npm i (bring in dependencies)
   - npm start
    
   - Endpoint: POST /signup
     - Sends a username and password in the req.body and saves to database.
     - Returns JSON Object of the signed up User.

   - Endpoint: POST /singin
     - Sends a username and password in the authorization Header encoded in base64.
     - Server checks if username and password are a match in the db.
     - Returns JSON Object of a single animal that corresponds to the id.

        
  ### Tests
   - Server Tests: 
    `npm run test`
  
  ### UML

![UML](./lab06.png)
