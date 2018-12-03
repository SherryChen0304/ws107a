var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('should return not 2 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), 2);
        });
    });
});

/*断言（assert）指的是对代码行为的预期。一个测试用例内部，包含一个或多个断言（assert）。
    断言会返回一个布尔值，表示代码行为是否符合预期。
    测试用例之中，只要有一个断言为false，这个测试用例就会失败，只有所有断言都为true，测试用例才会通过。
    
    equal(actual实际值: any, expected期望值: any, message?: string | Error)
*/

/* describe('測試標題', function(){
    it('測試內容', function(done){
        // 進行測試
    })
    it('測試內容2', function(done){
        // 進行測試
    })
}) */