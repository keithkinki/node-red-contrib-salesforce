/**
 * Tests for the connection configuration object
 */
const should = require('should');
const helper = require('node-red-node-test-helper');
const chatterNode = require('../chatter.js');

helper.init(require.resolve('node-red'));

describe('Salesforce Chatter Node', function() {
  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload().then(function() {
      helper.stopServer(done);
    });
  });

  it('should be loaded', function(done) {
    const flow = [{ id: 'n1', type: 'chatter', name: 'chatter' }];
    helper.load(chatterNode, flow, function() {
      const n1 = helper.getNode('n1');
      should(n1).have.property('name', 'chatter');
      done();
    });
  });

  /*
   * TODO:
   * Execute Chatter to mock server
   */
});
