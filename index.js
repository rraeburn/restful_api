'use strict';

var app = require('./app.js');

app.makeBaby(3000, function(err,data) {
  console.log('baby made!');
});

