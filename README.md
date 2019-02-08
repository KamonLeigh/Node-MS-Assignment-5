# Node Masterclass Assignment-5

## Build a test runner

Build a simple test runner in **/test** and write unit tests for the functions is the 
**lib.js** located in the **/app** directory.

# How to run tests?
 From the parent directory please use the following command:
 ```
 node test/index.js

 ```
 # Functions

 ## These are the functions tested:

 1. **factorial** - Function takes in a number as an input and returns factorial of the given number.
 ```
    factorial(4) = 24 (4! == 4 x 3 x 2 x 1)
 ```

 2. **reverseString** - Function takes in a string as an input and reverses the string. If parameter is invalid 'false' is returned

 ```
    reverseSting('node') returns 'eodn'
 ```

 3. **palindrome** - Function evalutes string checking if string is a word palindrome (word, number, pharse which reads the same backwards as forwards).
 If word is 'true' is returned. If false or input is invalid, 'This String is not a palindrome' and 'Please enter valid input' are returned respectively;

 ```
    palindrome(level) returns true
 ```

 4. **multipleTwoNumbers** - function multiplies only two numbers. If one parameter is given or input is invalid false will be returned.

 ```
 multipleTwoNumbers(3,4) returns 12
 ```



