var wdio = require('webdriverio');
var wdioElementScreenshot = require('wdio-element-screenshot');



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

wdioElementScreenshot.init(driver);

	driver.init()
	.click('//android.widget.LinearLayout[@content-desc="Números e operações básicas"]/android.view.ViewGroup[1]/android.widget.Button[8]')		
	.takeElementScreenshot('~igual')
	.then(function(data){
		console.log(data);
	})
	.saveElementScreenshot('~igual','./snapshot.png')
	.then(function(){
		sleep(10000);
		console.log(oi);
	})
	.end();

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
