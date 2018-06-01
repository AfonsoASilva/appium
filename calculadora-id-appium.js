const wdio = require('webdriverio');


const opts = {
    port: 4723,
    desiredCapabilities: {
	  "platformName": "Android",
	  "platformVersion": "7.0",
	  "deviceName": "0023048519",
	  "automationName": "UiAutomator2",
	  "appPackage": "com.android.calculator2",
  	  "appActivity": "com.android.calculator2.Calculator",
	  "noReset": "true",
	  "full-reset": "false"
	
	}
};
  
// sleep time expects milliseconds
function sleep (time=1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
 
const driver = wdio.remote(opts);

driver.init()		
		.click('#com.google.android.calculator:id/digit_2')		
		.element("~mais")
		.click()
		.element('#com.google.android.calculator:id/digit_2')
		.click()
		.element("~igual")
		.click()
		.screenshot().saveScreenshot('./snapshot.png')
		//.screenshot().saveScreenshot('./snapshot.png')
		.end();

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
