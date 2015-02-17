'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    fs = require('fs');
require('../index.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('delete request', function() {
  it('responds to a delete request', function(done) {
    chai.request('localhost:3000')
      .delete('/dog/2')
      .end(function(err, res) {
        expect(err).eql(null);
        expect(res.status).eql(200);
        done();
      });
  });
});