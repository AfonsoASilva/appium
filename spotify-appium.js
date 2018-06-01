const wdio = require('webdriverio');


const opts = {
    port: 4723,
    desiredCapabilities: {
	  "platformName": "Android",
	  "platformVersion": "7.0",
	  "deviceName": "0023048519",
	  "automationName": "UiAutomator2",
	  "appPackage": "com.spotify.music",
	  "appActivity": "com.spotify.music.MainActivity",	  
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
		.then(function(){
			sleep(1000)
		})
		.element("~Buscar")
		.click()
		.then(function(){
			sleep(2000)
		})
		.element("#{locator}")
		.then(function(){
			sleep(1000)
		})
		.click()
		.then(function(){
			sleep(1000)
		})
		.element("#{locator}")
		.setValue("we will rock you")
		.then(function(){
			sleep(1000)
		})
		.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.support.v7.widget.RecyclerView/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]")
		.click()
		.then(function(){
			console.log("aqui");
		})
		.end();

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
sleep(500).then(() => {
    // Do something after the sleep!
});

/*

let el2 = driver.element("~Buscar");
el2.click();
let el3 = driver.element("#{locator}");
el3.click();
el3.setValue("we will rock you");
let el4 = driver.element("#{locator}");
el4.setValue("we will rock you");
let el5 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.support.v7.widget.RecyclerView/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]");
el5.click();
*/



function  spotifyTest(){

	sleep();

	let libraryElement = driver.element("~Sua Biblioteca");
	libraryElement.click();
	let albumElement = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[5]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView");
	albumElement.click();

	driver.touchAction([
	  {action: 'press', x: 553, y: 586},
	  {action: 'moveTo', x: 0, y: 266},
	  'release'
	]);

	let searchBarElement = driver.element("#{locator}");
	searchBarElement.setValue("beatles");
	let albumBeatlesElement = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout");
	albumBeatlesElement.click();

	driver.touchAction([
	  {action: 'press', x: 588, y: 1089},
	  {action: 'moveTo', x: 0, y: -204},
	  'release'
	]);
	let musicElement = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ListView/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout[1]");
	musicElement.click();

	console.log("aqui");

	driver.end();
}