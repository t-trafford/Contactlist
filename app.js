

// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// for route reference
const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection 
mongoose.connection.on('connected', ()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error in database connection: ' +err);
    }
});

// port no
const port = 3000;

// body-parser
app.use(bodyparser.json());


// adding middleware
app.use(cors());


// static files
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use ('/api', route);

// testing server
app.get('/',(req,res)=>{
    res.send('tanay');
});

app.listen(port,()=>{
    console.log('server started at port: '+port);
});