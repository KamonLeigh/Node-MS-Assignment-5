/*
 * 
 * 
 * Test Runner
 * 
 * 
 */

 // Override the NODE_ENV variable
 process.env.NODE_ENV = 'testing';

 // Application logic for the test runner
 _app = {};

 // Container for the test 
 _app.tests = {};

 _app.tests.unit = require('./unit');

 //Count all tests: the set up of the tests allows the test runner to be expandable
 _app.countTests = () => {
     let counter = 0;
     for(const key in _app.tests){
         if(_app.tests.hasOwnProperty(key)){
             const subTests = _app.tests[key];
             for(const testName in subTests){
                 if(subTests.hasOwnProperty(testName)){
                    counter++
                 }
             }
         }
     }

     return counter;
 }

 // Run all the tests tallying the successes and errors
 _app.runTests = () => {
    let errors = [];
    let successes = 0;
    const limit = _app.countTests();
    let counter = 0;

    for(const key in _app.tests){
        if(_app.tests.hasOwnProperty(key)){
            const subTests = _app.tests[key];
            for(const testName in subTests){
                if(subTests.hasOwnProperty(testName)){
                    (function(){
                        const tmpTestName = testName;
                        const testValue = subTests[testName];
                       try{
                            // Call the test
                            testValue(function () {
                                // If function runs without throwing log onto console as green
                                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                                counter++;
                                successes++;

                                if(counter === limit){
                                     _app.produceTestReport(limit, successes, errors);
                                }

                            });

                       }catch(e){
                           errors.push({
                               'name': testName,
                               'error': e
                           });

                           console.log('\x1b[31m%s\x1b[0m', tmpTestName);
                           counter++
                           if(counter === limit){
                               _app.produceTestReport(limit, successes, errora)
                           }

                       }

                    })();
                }
            }

        }

    }



 }


 // Print the results using the below function
 _app.produceTestReport = (limit, successes, errors) => {

 }


 // Run tests
 _appTests();