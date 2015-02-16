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
      'Content-Type': 'text/plain'
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

//ADD 
//tests 
//gruntfile
//patch
