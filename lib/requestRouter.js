'use strict';

var restRouter = function(){};

restRouter.prototype.POST = require('./post.js');
restRouter.prototype.GET = require('./get.js');
restRouter.prototype.PUT = require('./put.js');
restRouter.prototype.PATCH = require('./patch.js');
restRouter.prototype.DELETE = require('./delete.js');

module.exports = new restRouter();