const assert = require("assert");
const {Builder} = require("selenium-webdriver");

const config = require('../config.js');

function createDriver(browser, grid = false) {
    /**
     * 
     */
    let driver;
    if (browser === 'chrome' || browser === 'firefox') {
        if (grid === true) {
            driver = new Builder()
            .usingServer(config.grid_url)
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
        console.log(`Unknown '${browser}' browser`);
      }
    return driver;
    }

describe("Browser testing", () => {
   
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

     it("test resolution 1280X1024", async () => {
        let setWidth = 1280;
        let setHeight = 1024;
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