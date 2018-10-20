const assert = require('assert');
const {Builder} = require('selenium-webdriver');
let driver;
const TIMEOUT = 10000; // milliseconds

function getDriver() {
    driver = new Builder().forBrowser('firefox').build();
    driver.manage().setTimeouts({implicit: TIMEOUT});
    driver.manage().window().setRect({width: 1280, height: 1024});

}

function closeDriver() {
    if (driver){
        driver.close();
    }
}

describe('Browser resolution', function () {
   this.timeout(0); // Turning off mocha timeout for whole suite
   describe('test resolution 800x600', function () {
       it('resolution is set', async function () {
           let set_width = 800;
           let set_height = 600;
           await getDriver();
           await driver.manage().window().setRect({width: set_width, height: set_height});
           let {width, height} = await driver.manage().window().getRect();
           assert(width === set_width, "Expected width " + set_width);
           assert(height === set_height, "Expected height " + set_height);
           await closeDriver();
       });
    });
});