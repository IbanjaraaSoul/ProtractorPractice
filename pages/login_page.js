var logger = require('../utils/log');
var browserAction = require('../utils/browserUtils');
var locator = require("../object_repository/locators.json");

var login_page = function() {

  this.validateLoginToQA = function(testData) {
    browser.driver.manage().window().maximize();
    browser.driver.get(locator.testSiteURL);
    console.log("Trying to remove certification pop from chrome");
   // browserAction.sendKeys(protractor.Key.ENTER");
   // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  // var enter = browser.actions().sendKeys(protractor.Key.ENTER);
  // Enter.perform();
    browser.waitForAngularEnabled(false);
    console.log("Trying to login as "+ testData.superAdminUsername);
    browserAction.setText(locator.loginPage.userNameTextBox,testData.superAdminUsername);
    browserAction.click(locator.loginPage.loginButton);
    browserAction.getText(locator.homePage.homeIconText).then(function (text) {
			console.log("Login successful with home page icon as  " + text);
			expect(text).toEqual('Home');
		});
  };

};
module.exports = new login_page();