const baseConfig = require('./nightwatch.conf.js');
const config = {
   ...baseConfig,
   webdriver: {
       'start_process': false,
       'host': 'hub-cloud.browserstack.com',
       'port': 80
   },
   
   test_settings: {
      default: {
        desiredCapabilities: {
          "browserstack.user": process.env.BROWSERSTACK_USER,
          "browserstack.key": process.env.BROWSERSTACK_KEY,
          "browserstack.local": true,
          "browser": "chrome",
          "browser_version": "78.0.3904.108",
          "os": "Windows",
          "os_version": "10",
          "resolution": "1366x768",
          "browser": "firefox",
          "browser_version": "70.0.1",
          "os": "Windows",
          "os_version": "10",
          "resolution": "1366x768"
        }
      }
     
    }
};



//Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
   var test_setting = config.test_settings[i];
   test_setting['selenium_host'] = config.webdriver.host;
   test_setting['selenium_port'] = config.webdriver.port;
}
module.exports = config;