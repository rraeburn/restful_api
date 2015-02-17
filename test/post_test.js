'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    fs = require('fs'),
    testData = '{"test":"stuff"}';
require('../index.js');

var expect = chai.expect;

chai.use(chaihttp);

describe('post request', function() {
  it('responds to a post request', function(done) {
    chai.request('localhost:3000')
      .post('/dog')
      .send(testData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});

