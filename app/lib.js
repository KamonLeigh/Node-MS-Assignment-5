/*
 *  
 *  List of functions to be tested
 * 
 */


 // Hold functions
 const lib = {}

    // Factorial - returns factorial of a given number. If input is not valid -1 is returned
     lib.factorial = (num) => {

        num = typeof(num) === 'number' && num >= 0 ? num : false; 

        if(num || num === 0){

            if(num === 0 || num === 1) return 1;
            
            for(let i = num - 1; i > 0; i--){
                num*=i
            }

            return num;

        } else {

            return -1;
        }

    };
    // reverseString- takes string as an input snd reverses returns false if string is invalid
    lib.reverseString = (str) => {
        str = typeof(str) === 'string' && str.trim().length > 0 ? str : false;

        if(str){
            
            let reverseArray = [];
            const strArray = str.split("");

            for(let i = strArray.length - 1; i >=0; i--){
                reverseArray.push(strArray[i]);
            }

            return reverseArray.join("");

        } else {

            return false;
        }
    };

    // multipleTwoNumbers takes two numbers as input and multiplies them together
    lib.multipleTwoNumbers = (num1, num2) => {
        num1 = typeof(num1) === 'number' ? num1 : false;
        num2 = typeof(num2) === 'number'? num2 : false;

        if(num1 && num2){
            
            return num1 * num2;
        } else {

            return false;
        }
    };

    // palindrome checks if string is a palindrome 'true' is returned otherwise message is returned
    lib.palindrome = (str) =>{
        str = typeof(str) === 'string' && str.trim().length > 0 ? str : false;

        if(str){

            
            const copyStr = str;
            let reverseStr = [];
            
            const strArray = str.split("");
            
            for(let i = str.length - 1; i >= 0; i--){
                reverseStr.push(strArray[i])
            }
            
            reverseStr = reverseStr.join("");
            
            if(reverseStr === copyStr){
                return true;
            } else {
                return 'This String is not a palindrome';
            }
        }

        return 'Please enter valid input';

    };


// Export functions
 module.exports = lib;