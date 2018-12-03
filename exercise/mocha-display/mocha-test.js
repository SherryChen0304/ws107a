var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should return 2 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), 2);
    });
    it('should return 1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(2), 1);
    });
    it('should return 0 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(1), 0);
    });
  });
});

/* assert.equal([1,2,3].indexOf(此為陣列的第一個，為a[0]:1), a[0]:0); */