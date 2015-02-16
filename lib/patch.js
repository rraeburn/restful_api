'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  var input = '',
      oldInfo; 

  fs.open('./data' + fileName, 'r+', function(err){
    if(err) {
      res.writeHead(404);
    } else {
      req.on('data', function(data) {
        input += data.toString('utf-8');
        input = JSON.parse(input);
      });
    }
  });
};
