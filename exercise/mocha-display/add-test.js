var assert = require('assert');
var add = require('./add');
describe('Add', function() {
  describe('#indexOf()', function() {
    it('add(2, 3)應該等於5', function() {
      assert.equal(add(2, 3), 5);
    });
    it('add(7, 6)應該等於13', function() {
        assert.equal(add(7, 6), 13);
      });
  });
});