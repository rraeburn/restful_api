'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  var input = '',
      currentFiles;

  req.on('data', function(data) {
    input = data.toString('utf-8');
      currentFiles = fs.readdirSync('./data');
  });

  req.on('end', function() {
    if(currentFiles.indexOf(fileName) > -1) {
      res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.writeFile('./data/' + fileName, input, function(err) {
      res.end('replaced file');
    });
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.end('file does not exist');
    }
  });
};