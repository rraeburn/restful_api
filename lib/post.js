'use strict';

var fs = require('fs');

module.exports = function(req, res) {
  var fileNumber = 0;
  var input = '';
  
  req.on('data', function(data){
    input += data.toString('utf-8') + '\n';
  });

  req.on('end', function() {
    res.writeHead(200, {
      'Content-Type': 'text/html'
      });

  fs.readdir('./data', function(err, files) {
    fileNumber = files.length;
      fs.writeFile('./data/' + Number(Number(fileNumber) + 1) + '.json', input, function(err) {
        res.end('added it');
      });
    });
  });
};