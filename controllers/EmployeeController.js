// Import Node Restful dependencies
var restful = require('node-restful');

module.exports = function(app, route){
    // Setup the controller here
    var rest = restful.model('employee', app.models.employee).methods(['get','put','post','delete']);
    
    // Register this API on route
    rest.register(app, route);
   
    // Return the middleware
    return function(req, res, next){
        next();
    };
};