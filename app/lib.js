/*
 *  
 *  List of functions to be tested
 * 
 */

 module.exports = {

     factorial = (num) => {

        num = typeof(num) === 'number' && num >= 0 ? num : false; 

        if(num){

            if(num === 0 || num === 1) return 1;
            
            for(let i = num - 1; i > 0; i--){
                num*=i
            }

            return num;

        } else {

            return -1;
        }

    },

    reverseString = (str) => {
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
    },
    multipleTwoNumbers(num1, num2){
        num1 = typeof(num1) === 'Number' ? num1 : false;
        num2 = typeof(num2) === 'Number'? num2 : false;

        if(num1 && num2){
            
            return num1 * num2;
        } else {

            return false;
        }
    }

 }