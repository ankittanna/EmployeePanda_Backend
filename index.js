// Importing all the dependent modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the instance of the app
var app = express();

// Add the necessary middlewares
// These middlewares get called before each service request
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.raw({inflate:true, type:'application/*'}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Adding Cross origin Requests Support (CORS) to the API
app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
});

// Connect here with MongoDB
mongoose.connect('mongodb://localhost/employeepandadb');
mongoose.connection.once('open', function(){
    // Load the models
    app.models = require('./models/index');
    
    // Load the routes
    var routes = require('./routes/routes');
    
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });
    
    console.log('Listening on port 3000');
    app.listen(3000);
});