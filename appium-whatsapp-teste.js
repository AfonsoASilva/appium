const wdio = require('webdriverio');


const opts = {
    port: 4723,
    desiredCapabilities: {

      "platformName": "Android",
      "platformVersion": "7.0",
      "deviceName": "0023048519",
      "automationName": "UiAutomator2",
      "appPackage": "com.google.android.youtube",
      "appActivity": "com.google.android.apps.youtube.app.application.Shell$HomeActivity"
    }
  };
  
  const client = wdio.remote(opts);
  
client.init();
let el1 = client.element("~Pesquisar");
el1.click();
let el2 = client.element("#{locator}");
el2.setValue("goku and frieza vs jiren");
el2.setValue("goku and frieza vs jiren\\n");
let el3 = client.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.TextView[1]");
el3.click();