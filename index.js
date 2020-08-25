const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');
var members = require('./Members');

const app = express();


// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Home page route
app.get('/', (req, res) => 
    res.render('index', {
        title: 'Member App',
        members
    })
);

// Body Parser Middleware handle raw JSON
app.use(express.json());
// Body parser middleware for form submittion: so we can handled url encoded data
app.use(express.urlencoded({extended:false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members api route
app.use('/api/members', require('./routes/api/members'))


app.listen(5000);