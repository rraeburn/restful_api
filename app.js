'use strict';

var http = require('http'),
    requestRoutes = require('./lib/requestRouter.js'),
    url = require('url'),
    routes = [],
    App = function(){};

var server = http.createServer(function(req, res) {
  var fullPath = url.parse(req.url).pathname,
      fileStart = Number(fullPath.lastIndexOf('/')) +1,
      path = req.url.split('/')[1],
      fileName = fullPath.substr(fileStart, fullPath.length) + '.json';

  if(routes.indexOf(path) !== -1) {
    requestRoutes[req.method](req, res, fileName);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.write('page not found');
    res.end();
  }    
});

App.prototype.makeBaby = function(address, callback) {
  server.listen(address, callback);
};

App.prototype.addResource = function(route) {
  routes.push(route);
};

module.exports = new App();

//issues  - allows post to any resource
//get works for any localhost:3000/# - no need for pathname
//delete can delete item, but crashes server

//ADD 
//tests 
//gruntfile
//patch
