/*
 * Unit tests
 *
 */

 const assert = require('assert');
 const {factorial, reverseString, multipleTwoNumbers, palindrome  } =require('./../app/lib');


 // Hold the tests 
 const unit = {};


 // Assert that factorial 4 returns 24
 unit['factorial(4) should return 24'] = (done) => {
     const result = factorial(4);
     assert.equal(result, 24);
     done();
 }

 // Assert that factorial 0 returns 1
 unit['factorial(0) should return 1'] = done => {
     const result = factorial(0);
     assert.equal(result, 1);
     done();
 }

 // Asset that -1 will be returnes if invalid argument is used
 unit['factorial("foo") should return -1'] = done => {
     const result = factorial('foo');
     assert.equal(result, -1);
     done();
 }








 module.exports = unit;
