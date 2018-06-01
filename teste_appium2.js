const wdio = require('webdriverio');


const opts = {
    port: 4723,
    desiredCapabilities: {
      "platformName": "Android",
      "platformVersion": "7.0",
      "deviceName": "0023048519",
      "appPackage": "io.appium.android.apis",
      "appActivity": "io.appium.android.apis.ApiDemos",
      "automationName": "UiAutomator2",
      "noReset": "true",
      "full-reset": "false"
    }
  };
  
  const client = wdio.remote(opts);
  
  client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();