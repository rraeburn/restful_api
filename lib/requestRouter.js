'use strict';

var postRequest = require('./post.js');
var getRequest = require('./get.js');
var putRequest = require('./put.js');
var patchRequest = require('./patch.js');
var deleteRequest = require('./delete.js');

var restRouter = function(){};

restRouter.prototype.POST = postRequest;
restRouter.prototype.GET = getRequest;
restRouter.prototype.PUT = putRequest;
restRouter.prototype.PATCH = patchRequest;
restRouter.prototype.DELETE = deleteRequest;

module.exports = new restRouter();