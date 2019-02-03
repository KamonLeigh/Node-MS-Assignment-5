/*
 *  
 *  List of functions to be tested
 * 
 */

 module.exports = {

     factorial = (num) => {

        num = typeof(num) === 'number' && num >= 0 ? num : false; 

        if(num){

            for(let i  = 0; i <= num; i++){

                i*=i
            }

            return i;

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

 }