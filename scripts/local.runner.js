#!/usr/bin/env node
var Nightwatch = require('nightwatch');
var browserstack = require('browserstack-local');
var bs_local;
require('dotenv').config();     //dodatak
try {
  process.mainModule.filename = "./node_modules/.bin/nightwatch"
  // Code to start browserstack local before start of test
  console.log("Connecting local");
  console.log(process.env.BROWSERSTACK_USER);
  Nightwatch.bs_local = bs_local = new browserstack.Local();
  bs_local.start({'key': process.env.BROWSERSTACK_KEY}, function(error) {      //iz env.
    if (error) throw error;
    console.log('Connected. Now testing...');
    Nightwatch.cli(function(argv) {
      Nightwatch.CliRunner(argv)
        .setup(null, function(){
          // Code to stop browserstack local after end of parallel test
          bs_local.stop(function(){});
        })
        .runTests(function(){
          // Code to stop browserstack local after end of single test
          bs_local.stop(function(){});
        });
    });
  });
} catch (ex) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(ex.stack + '\n');
  process.exit(2);
}