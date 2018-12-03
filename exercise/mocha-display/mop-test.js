var assert = require('assert');
var M = require('./mop');
describe('Mop', function() {
    it('add(2, 3)應該等於5', function() {
      assert.equal(M.add(2, 3), 5);
    });
    it('add(7, 6)應該等於13', function() {
        assert.equal(M.mul(7, 6), 42);
    });
});