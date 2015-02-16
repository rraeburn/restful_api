'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    fs = require('fs');
require('../index.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('put request', function() {
  it('responds to a put request', function(done) {
    chai.request('localhost:3000')
      .put('/dog/1')
      .send({'test': 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).eql(200);
        done();
      });
  });
});