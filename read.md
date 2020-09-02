### Using middleware. 
`
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. ... Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.
`
### var express = require('express')
`
Requires the Express module just as you require other modules and and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application).
`
### Higher order functions 
`
are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output. For example, Array.
`
### The some() method 
`
executes the callback function once for each element present in the array until it finds the one where callback returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true.
`
### A JavaScript Callback Function 
`
is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into. JavaScript Callback Functions can be used synchronously or asynchronously.
`
### Why do we use callback function in JavaScript?
`
It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors. In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.
`
### What is Express?
`
Express is a fast, unopinionated and minimalist web framework for Nod.js.

Express is a 'server-side' or 'back-end' framework. It is not comparable to client-side framworks like React, Angular & Vue. It can be used in combination with those frameworks to build full stack applications.
`
### Middleware
`
  Middleware is a function that have access to (req, res) function. can change and add things.
`
### Documentation
`
Read this link:: https://expressjs.com/en/5x/api.html#express
`

## Index:
```
  - 0:55  - what is Express?
  - 2:20  - what to know first?
  - 4:44 - The basic syntax of a web server:
  - 5:58  - Basic Route Handling
  - 7:30 - Express middleware
  - 8:40 - setting up the environment tools
  - 10:37 - creating a basic Express server 
  - 13:00 - Create a Route
  - 18:40 - static folder
  - 21:45 - creating a simple REST API its need a route
  - 22:37 - Creating a model for REST API
  - 24:00 - MiddleWare
  - 30:15 - GET Request
  - 37:25 - express route
  - 41:25 - POST Request
  - 49:02 - PUT Request
  - 55:56 - delete Request
  - 58:00 - rendering templates
  - Home handle bar
  - 1:07:14 - Create a form
````
### Why use Express?
```
- Makes building web applications with Node.JS MUCH easier
- Used for both server rendered apps as well as API/Microservices
- Extremley light, fast and free
- Full control of request and response
- By far the most popular Node framework
- Great to use with client side frameworks as it's all JavaScript
```
### What to know first
```
- JavaScript Fundamentals(Objects, Arrays, Conditionals, etc)
- Basic Node.js & NPM
- HTTP STATUS CODES
- JSON
- High Order Array Methods - forEach, map, filter
- Arrow Functions
```
### Basic Server Syntax
```
- const express = require('express');
  // Init express
  const app = express();

  //Create your endpoints/route handlers
  app.get('/', function (req, res){
    res.send('Hello World!');
  })

  //Listen on a port
  app.listen(5000);
 ``` 
### Basic Route Handling
  ```
  - Handling requests/routes is simple
  - app.get(), app.post(), app.delete(), etc
  - Access to params, query strings, url parts, etc
  - Express has a router so we can store routes in separate files and export
  - We can parse incoming data with the Body Parser.
  
  app.get('/', function (req, res){
    // Fetch from database
    // Load pages
    // Return JSON
    // Full access to request & response
  });
  
```

### Express Middleware
```
  Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware

  - Execute any code
  - Make changes to the request/response objects
  - End response cycle
  - Call next middleware in the stack
```
### Setting up the environment tools
```
  - npm init -y :: -y flag stand for yes: Will simply generate an empty npm, project without going through an interactive process. 
  - npm i express 
  - create main entry point file, index.js, app.js, server.js or any
  - npm i body-parser :: handle data come in request from the server, so we can read the body
  - npm i concurrently :: to run more then one script at a time.
  - npm i mongoose :: for our database
  - npm i -D nodemon :: in Devlope environment change the script on package.json
    "scripts": {
    "start": "node index",
    "dev" : "nodemon index"
  },
  - npm run dev :  on the Terminal
```
### Creating a basic Express server and route and static folder
```
  - const express = require('express');
  - const path = require('path');

  - const app = express();

  - // 1. Create a route
    // app.get('/', (req, res) => {
    //     res.send('Hello world');
    // })
  - // 2. app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // })

  - // 3. Set static folder this is a kind of route
  app.use(express.static(path.join(__dirname, 'public')));

  const PORT = process.env.PORT || 5000

  app.listen(PORT, console.log(`the server started on port ${PORT}`));
 ```
### Middleware:
```
  - const logger = (req, res, next) => {
      console.log(`${req.protocal}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
      }
   
  - // Intialise
        app.use(logger);
 ```     
### Create a model for rest API.
```
 - //array of members and return this as a JSON. save it as a MODEL.
 - const members = [
      {
          id : 1,
          name: 'Britu',
          email: 'britu@hotmail.com',
          stauts: 'active'
      },
      {
          id : 2,
          name: 'Hemu',
          email: 'hemu@hotmail.com',
          stauts: 'active'
      }
    ]
 ``` 
### Create a simple rest API, its need a route and get request together
```
  // this route gets all members
  - app.get('/api/members', (req, res) => {res.json(members)});

  // Get single members
  - app.get('/api/members/:id', (req, res)=>{
  //res.send(req.params.id);
    - const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        return  res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        return res.status(400).json({msg: `no member with the id of ${req.params.id}`})
    }
   
});
 ```
### Express Route 
```
  - Create a folder routes/api/members.js && mainpoint place Express API route:
    - eg: app.use('/api/members', require('./routes/api/members'));
    
  - const express = require('express');
  - const router = express.Router();
  - const members = require('../../Members');

    // this route gets all members
  - router.get('/', (req, res) => {res.json(members)});

    // Get single members
  - router.get('/:id', (req, res)=>{
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        return  res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        return res.status(400).json({msg: `no member with the id of ${req.params.id}`})
    }
   
});

module.exports = router;

```
### POST Request (add Body Parser Middleware)
```
  - app.use(express.json();
  - app.use(express.urlencoded({extended: false}));
  ---- in member routes api ---
  
  // Post Create Member
  - router.post('/', (req, res)=>{
    //res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
      }
   -  if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: `Please include a name and email`});
      }
   -  members.push(newMember);
      res.json(members);
  });
```  
### PUT Request
```
  - router.put('/:id', (req, res) => {

  -    const found = members.some(member => member.id === parseInt(req.params.id));

   -   if(found){
          const UpdMember =  req.body; //will get email and name
          members.forEach(member =>{
              if(member.id === parseInt(req.params.id)){
                  //to check updated both item use trinary operator
                  member.name = UpdMember.name ? UpdMember.name : member.name;
                  member.email = UpdMember.email ? UpdMember.email : member.email;

                  res.json({msg: 'Member updated', member});
              }
          })
      }else{
          res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
      }

     });
```     
### DELETE request
```
    // Delete Member
    - router.delete('/:id', (req, res) =>{
    - const found = members.some(member => member.id === parseInt(req.params.id));

     - if (found){
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        })
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
  });
 ```
###  rendering templates: select Template from Github

      https://github.com/ericf/express-handlebars
      
    - express handle bar -> npm i express-handlebars -> follow the documentation
    - index.js && Handlebars Middleware 
        |
         -> const exphbs = require('express-handlebars');
         |
         -> app.engine('handlebars', exphbs());
         -> app.set('view engine', 'handlebars');
         .
        ├── app.js
        └── views
            ├── home.handlebars
            └── layouts
                └── main.handlebars

        2 directories, 3 files
   ``` 
    **views/layouts/main.handlebars:**

      The main layout is the HTML page wrapper which can be reused for the different views of the app. `{{{body}}}` is used as a placeholder for where the main content should be rendered.

      ```handlebars
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>Example App</title>
      </head>
      <body>

        <div class="container" mt-4>
          {{{body}}}
        </div>

      </body>
      </html>
      ```
```
### Render it : create a route
  ```
  //Homepage route
    app.get('/', (req, res) => res.render('index'));
```
### Home.handlebars (content): <- index.js
```
  //Homepage route
    app.get('/', (req, res) => 
      res.render('index', {
        title: 'Member App',
        members
    }));
    
    ## Home handlebar
     <h1>{{{title}}}</h1>
        <h4>Members</h4>
        <ul class="list-group">
            {{#each members}}
                <li class="list-group-item">{{this.name}} : {{this.email}}</li>

            {{/each}}
        </ul>
```
### form in handlebar
```
<h1>{{{title}}}</h1>
<h4>Members</h4>
<form action="/api/members/" method="POST" class="mb-4">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" class="form-control">
    </div>
    <div class="form-group">
        <label for="email">email</label>
        <input type="email" name="email" class="form-control">
    </div>
    <input type="submit" value="submit" class="btn btn-primary btn-block">
</form>


<ul class="list-group">/Users/lama/Desktop/MERN/MERN Udemy/udemy_mern/readme.md
    {{#each members}}
        <li class="list-group-item">{{this.name}} : {{this.email}}</li>

    {{/each}}
</ul>

<a href="/api/members" class="btn btn-light mt-4">Visit API</a>
```
############################################################### 
## Socia network with Node.js, Express, React, Tedux & MongoDB.
###############################################################

## Environment & Setup:
```
  - VS code extention : bracket pair colorizer, Prettier, Es7 react/Redux/GraphQL
  - git: deploy for herouko
  - postman: http request to our server to test for backend, api and tested for react frontend
  - Chrome extention: react developer tool, redux tools, 
```
## MongoDB Atlas Setup
```
```
## Install Dependencies & Basic Express Setup
```
- gitignore -> node_modules/
- git init
- npm init : initialize package.json

  ### install Regular Dependencies:  
    - npm i express: main framework for our backend
    - express-validator : for data validation for post request for api to raise a error
    - bcrypt : for password encryption
    - config: for global variable
    - gravatar: far avatar
    - json webtoken: JWT for token
    - Mongoose: a layer on top of database to interact with database
    - request: small module allow to http request for another api for github repository. 
 
  ### install Dev dependency:
    - npm i -D nodemon : constentley watch our server and don't need to run manually
    - npm i -D concurrently: run server for backend express server and front end react dev server for one single command
  
### Basic Express setup
  - const express = require("express");

  - const app = express();

  - app.get("/", (req, res) => {
      res.send("Hello world!");
    });

  - const PORT = process.env.PORT || 5000;

  - app.listen(PORT, console.log(`Server is running in ${PORT}`));

  ### at the end in the terminal quick Commit Git
    git add .
    git commit -m 'Initial commit' -> that will added local repository"to put it in heroko
    git log --stat origin/master..HEAD -> Viewing uppushed Git Commit
    git log --branches --not --remotes -> All branches that arent pushed
    git log --branches --not --remotes --simplify-by-decoration --decorate --oneline -> for most recent pushed
 ```
## Connecting To MongoDB with Mongoose
```
- get the link from mangoDB and put it on the created file
- ^Config ~default.json -> 
  {
  "mongoURI": "mongodb+srv://username:Password@cluster0.hurdp.mongodb.net/<dbname>?retryWrites=true&w=majority"
  }

- ^config ~db.js ->
  - const mongoose = require("mongoose");
  - const config = require("config");
  - const db = config.get("mongoURI");

//to connect to mongo db using async await wrap it inside try / catch block
  - const connectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("MongoDB Connected....");
    } catch (err) {
      console.error(err.message);
      // EXIT process with failure
       process.exit(1);
      }
  };

  module.exports = connectDB;

- server.js ->
  const connectDB = require("./config/db");
  // Connect Database
  connectDB();

```
## Route Files with Express Router with api
```
  ^routes ^api ~auth.js ~posts.js ~profile.js ~ users.js
  = users.js -> put this to all .js files
    - const express = require("express");
    - const router = express.Router();

      // @route   GET api/users
      // @desc    Test route
      // @access  Public

     - router.get("/", (req, res) => res.send("User route"));

    module.exports = router;
    
   -> server.js:
    //Define Routes
      app.use("/api/users", require("./routes/api/users"));
      app.use("/api/users", require("./routes/api/auth"));
      app.use("/api/users", require("./routes/api/profile"));
      app.use("/api/users", require("./routes/api/post"));

    ```
    
   
```
## Section 3: User API Routes & JWT Authentication
### Creating a User Model (mongoose)
```
 ^models ~User.js -> 
   const mongoose = require("mongoose");

  const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = User = mongoose.model("user", UserSchema);

```
### Request and Body Validation
```
  - ~user.js from routes/api
   - ~server.js : 
   // Init Middleware
  - app.use(express.json({ extended: false }));
  https://express-validator.github.io/docs/   follow the docs: 
  
  Codes:
  - const bcrypt = require("bcrypt");
  - const { body, validationResult } = require("express-validator");

  // @Route POST api/users
  // @ Desc   Test route
  //@access Public

  router.post(
    "/",
    [
      body("name", "Name is required").not().isEmpty(),
      body("email", "Please include a valid email").isEmail(),
      body(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      res.send("Hello world");
    }
  );

  module.exports = router;

 ```
 ### User Registration
 ```
- const express = require("express");
- const router = express.Router();
- const gravatar = require("gravatar");
- const bcrypt = require("bcryptjs");
- const { body, validationResult } = require("express-validator");

- const User = require("../../models/User");
---------Header ------
  // See if user exists

    //Get users gravatar

    // Encrypt password

    // Sending back jsonwebtoken once user registered. get them into the database, and 
    return so they can use them to access protected route 
   

router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      //See if user exists // this go down
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      //create a new instance of user taken from user avatar continue
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //enrypt password using bcryptjs create a salt for hashing it
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      res.send("User registered");
    } catch (err) {
      console.error(err.message);
    }
    res.send("User Route");
  }
);

module.exports = router;
 ```
 
 ### implementing JWT : JWT debugger url: https://jwt.io/
 ```
 //Return jsonwebtoken
    - import jsonwebtoken -> "jwtSecret":"mysecretekey" on default.json
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
 ```
### custom Auth Middleware & JWT Verify || send the token to authenticate to access protected route
```
Create a custome middleware
^middleware ~auth.js
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Veryfy token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //req object assign a value to user and user is a payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};



>>> second page
- implemented this to protected route
  ^routes^api~auth.js.  :: Adding middleware
  const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");

//@rout        GET api/users
//Description   Test route
//@access       Public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
```

### User Authentication/ Login Route
```
^routes^api ~users.js
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");

const User = require("../../models/User");

//@rout        GET api/users
//Description   Test route
//@access       Public

router.post(
  "/",
  [
    body("name", "name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      //Get users gravatar
      //-> pass in the email
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Sending back jsonwebtoken once user registered
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    // See if user exists

    //Get users gravatar

    // Encrypt password

    // Sending back jsonwebtoken once user registered
  }
);

module.exports = router;

```
