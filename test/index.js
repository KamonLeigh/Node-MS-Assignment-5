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
                               _app.produceTestReport(limit, successes, errors)
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
    console.log("");
    console.log("----------BEGIN TEST REPORT----------");
    console.log("");
    console.log("Total Tests: ", limit);
    console.log("Pass: ", successes);
    console.log("Fail: ", errors.length);
    console.log("");

    // If there errors print them in detail and only print when there is an error
    if(errors.length > 0){
        console.log("----------BEGIN ERROR REPORT----------");
        console.log("");
        errors.forEach( error => {
            console.log("\x1b[31m%s\x1b[0m", error.name);
            console.log(error.error);
            console.log("");
        });
        console.log("");
        console.log("----------END ERROR REPORT----------");

    }
    console.log("");
    console.log("----------END TEST REPORT--------");
    process.exit(0)


 }


 // Run tests
 _app.runTests();