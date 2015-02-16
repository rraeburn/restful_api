'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    fs = require('fs');
require('../index.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('get request', function() {
  it('responds to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/dog/1')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).eql(200);
        done();
      });
  });
});
