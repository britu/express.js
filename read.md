## Using middleware. 
`
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. ... Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.
`
## var express = require('express')
`
Requires the Express module just as you require other modules and and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application).
`
## Higher order functions 
`
are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output. For example, Array.
`
## The some() method 
`
executes the callback function once for each element present in the array until it finds the one where callback returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true.
`
## A JavaScript Callback Function 
`
is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into. JavaScript Callback Functions can be used synchronously or asynchronously.
`
## Why do we use callback function in JavaScript?
`
It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors. In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.
`
## Documentation
`
Read this link:: https://expressjs.com/en/5x/api.html#express
`
## What is Express?
`
Express is a fast, unopinionated and minimalist web framework for Nod.js.

Express is a 'server-side' or 'back-end' framework. It is not comparable to client-side framworks like React, Angular & Vue. It can be used in combination with those frameworks to build full stack applications.
`
## Why use Express?

- Makes building web applications with Node.JS MUCH easier
- Used for both server rendered apps as well as API/Microservices
- Extremley light, fast and free
- Full control of request and response
- By far the most popular Node framework
- Great to use with client side frameworks as it's all JavaScript

## What to know first

- JavaScript Fundamentals(Objects, Arrays, Conditionals, etc)
- Basic Node.js & NPM
- HTTP STATUS CODES
- JSON
- High Order Array Methods - forEach, map, filter
- Arrow Functions

## BASIC SERVER SYNTAX

- const express = require('express');
  // Init express
  const app = express();

  //Create your endpoints/route handlers
  app.get('/', function (req, res){
    res.send('Hello World!');
  })

  //Listen on a port
  app.listen(5000);
  
## BASIC ROUTE HANDLING
  
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
  


## EXPRESS MIDDLEWARE

  Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware

  - Execute any code
  - Make changes to the request/response objects
  - End response cycle
  - Call next middleware in the stack

## Setting up the environment tools

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

## navigation on time line.

- 0:55  - what is Express?
- 2:20  - why use Express??
- 4:44 - The basic syntax of a web server:
- 5:58  - Basic Route Handling
- 7:30 - Express middleware

- 8:40 - setting up the environment tools
- 10:37 - creating a basic Express server 
- 13:00 - Create a Route
- 18:40 - static folder
- 21:45 - creating a simple REST API
- 24:00 - MiddleWare
- 30:15 - GET Request
- 37:25 - express route
- 41:25 - POST Request
- 49:02 - PUT Request
- 55:56 - delete Request
- 58:00 - rendering templates

