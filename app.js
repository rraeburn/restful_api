'use strict';

var http = require('http'),
    requestRoutes = require('./lib/requestRouter.js'),
    url = require('url'),
    routes = [],
    App = function(){};

var server = http.createServer(function(req, res) {
  var fullPath = url.parse(req.url).pathname,
      fileStart = Number(fullPath.lastIndexOf('/')) +1,
      firstSlash = fullPath.indexOf('/'),
      lastSlash = fullPath.lastIndexOf('/'),
      path = fullPath.substr(firstSlash, lastSlash),
      fileName = fullPath.substr(fileStart, fullPath.length) + '.json';

  if(routes.indexOf(path)) {
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

routes.push('dog');

module.exports = new App();

//issues  - allows post to any resource
//get works for any localhost:3000/# - no need for pathname

