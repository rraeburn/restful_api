'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    fs = require('fs'),
    testPatch = '{"test":"done"}';
require('../index.js');

var expect = chai.expect;

describe('patch request', function() {
  var newData = '{"test":"dataaa"}';
  var testNum = 0;
  before(function() {
    chai.request('localhost:3000')
      .post('/dog')
      .send(newData)
      .end(function (err, res) {
      fs.readdir('data', function(err, data) {
          testNum = data.length;
      });
    });
  });
  it('SHOULD ERROR BECAUSE I CANNOT FIGURE IT OUT', function(done) {
    chai.request('localhost:3000')
      .patch('/data/' + testNum)
      .send(testPatch)
      .end(function(err,res) {
        expect(err).eql(null);
        expect(res.status).eql(404);
        done();
      });
  });
});