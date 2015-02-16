'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  fs.unlinkSync('./data/' + fileName, function(err) {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
      });
    res.end('deleted');
  });
};