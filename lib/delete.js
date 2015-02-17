'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  fs.unlinkSync('./data/' + fileName, function(err) {
    console.log('deleted');
  });
    res.end();
};
