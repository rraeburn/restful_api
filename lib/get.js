'use strict';

var fs = require('fs');


module.exports = function(req, res, fileName) {
  var input = '';
  fs.readFile('./data/' + fileName, function(err, data) {
    if(err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.write(fileName + ' does not exist');
      res.end();
    } else {
      input = data.toString('utf-8');
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(input);
      res.end();
    }
  });
};