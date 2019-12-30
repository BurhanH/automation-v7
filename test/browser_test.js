const assert = require("assert");
const { Builder } = require("selenium-webdriver");

const config = require("../config.js");

function createDriver(browser, grid = false) {
    /**
     * 
     */
    let driver;
    if (browser === "chrome" || browser === "firefox") {
        if (grid === true) {
            driver = new Builder()
            .usingServer(config.gridUrl)
            .forBrowser(browser)
            .build();
        } else {
          driver = new Builder()
            .forBrowser(browser)
            .build();
        }
        driver
          .manage()
          .setTimeouts({ implicit: config.timeout });
        driver
          .manage()
          .window()
          .setRect({ width: 1280, height: 1024 });
      } else {
        throw new Error("Unknown '" + browser + "' browser");
      }
    return driver;
    }

describe("Browser testing", function () {
   this.timeout(0);
   let webdriver;
   
   beforeEach(async () => {
       webdriver = await createDriver(config.browser, config.grid);
   });

    it("test resolution 800x600", async () => {
        let setWidth = 800;
        let setHeight = 600;
        await webdriver.manage().window().setRect({width: setWidth, height: setHeight});
        let {width, height} = await webdriver.manage().window().getRect();
        assert(width === setWidth, "Expected width " + setWidth + " actual is " + width);
        assert(height === setHeight, "Expected height " + setHeight + " actual is " + height);
     });

     it("test resolution 1280x1024", async () => {
        let setWidth = 1280;
        let setHeight = 1024;
        await webdriver.manage().window().setRect({width: setWidth, height: setHeight});
        let {width, height} = await webdriver.manage().window().getRect();
        assert(width === setWidth, "Expected width " + setWidth + " actual is " + width);
        assert(height === setHeight, "Expected height " + setHeight + " actual is " + height);
     });
    
     it("test resolution 1600x1200", async () => {
        let setWidth = 1600;
        let setHeight = 1200;
        await webdriver.manage().window().setRect({width: setWidth, height: setHeight});
        let {width, height} = await webdriver.manage().window().getRect();
        assert(width === setWidth, "Expected width " + setWidth + " actual is " + width);
        assert(height === setHeight, "Expected height " + setHeight + " actual is " + height);
     });
    
     it("test resolution 1680x1050", async () => {
        let setWidth = 1680;
        let setHeight = 1050;
        await webdriver.manage().window().setRect({width: setWidth, height: setHeight});
        let {width, height} = await webdriver.manage().window().getRect();
        assert(width === setWidth, "Expected width " + setWidth + " actual is " + width);
        assert(height === setHeight, "Expected height " + setHeight + " actual is " + height);
     });
    
     it("test resolution 1900x1200", async () => {
        let setWidth = 1900;
        let setHeight = 1200;
        await webdriver.manage().window().setRect({width: setWidth, height: setHeight});
        let {width, height} = await webdriver.manage().window().getRect();
        assert(width === setWidth, "Expected width " + setWidth + " actual is " + width);
        assert(height === setHeight, "Expected height " + setHeight + " actual is " + height);
     });

    afterEach(async () => {
        if (webdriver) {
            await webdriver.quit();
        }
    });

});
