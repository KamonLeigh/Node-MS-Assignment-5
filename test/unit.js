/*
 * Unit tests
 *
 */

 const assert = require('assert');
 const {factorial, reverseString, multipleTwoNumbers, palindrome  } =require('./../app/lib');


 // Hold the tests 
 const unit = {};


 // Assert that factorial 4 returns 24
 unit['factorial(4) should return 24'] = done => {
     const result = factorial(4);
     assert(typeof result === 'number');
     assert.equal(result, 24);
     done();
 }

 // Assert that factorial 0 returns 1
 unit['factorial(0) should return 1'] = done => {
     const result = factorial(0);
     assert(typeof result === 'number' );
     assert.equal(result, 1);
     done();
 }

 // Asset that -1 will be returnes if invalid argument is used
 unit['factorial("foo") should return -1'] = done => {
     const result = factorial('foo');
     assert.equal(result, -1);
     done();
 }

 // Assert how function handles string
 unit['reverseString("node") should return string:"eodn"'] = done => {
     const string = reverseString('node');
     assert.equal(string, 'edon');
     assert.ok(typeof string === 'string');
     done();
 }

 // Assert hoe reverseString handle reverse invalid string
 unit['reverseString(6) should return false since in input is invalid'] = done => {
     const result = reverseString(6);
     assert.equal(result, false);
     done();
 }


 // Assert that palindrome reverses string
 unit['palindrome function should return true for "anna"'] = done => {
    const str = 'anna';
    assert.ok(typeof str === 'string');
    const result = palindrome(str);
    assert.equal(result, true);
    done();
 }

 // Assert that palindrome fn is case sensitive
 unit['palindrome fn should fail if palindrome if uppercase cannot be not mirrored'] = done => {
     const str = 'Level';
     assert.ok(typeof str === 'string');
     const result = palindrome(str);
     assert.equal(result, 'This String is not a palindrome');
     done();   
}

// Assert that fn errors with invalid input is used with palindrome
unit['palindrome fn should return: "Please enter valid input"'] = done => {
    const num = 3;
    assert.ok(typeof num === 'number');
    const result = palindrome(num);
    assert.equal(result, "Please enter valid input");
    done();
}

// Assert that function multiplies two numbers 
unit['multipleTwoNumbers(5, 5) should return 25'] = done => {
    const result = multipleTwoNumbers(5, 5);
    assert.ok(typeof result === 'number');
    assert.equal(result, 25);
    done();
}

// Assert the outcome when user inputs one value into the function
unit['multipleTwoNumbers(5) should return false'] = done => {
    const result = multipleTwoNumbers(5);
    assert.ok(typeof result === 'boolean');
    assert.equal(result, false);
    done();
}







 module.exports = unit;
