var logger = require('../utils/log');
var browserAction = function () {

  this.click = function (locatorWithType) {
    return element(this.getElement(locatorWithType)).click().then(function () {
      browser.sleep(1000);
    });
  };

  this.setText = function (locatorWithType, data) {
    return element(this.getElement(locatorWithType)).sendKeys(data);
  };

  this.moveToElement = function (locatorWithType) {
    browser.ignoreSynchronization = true;
    return browser.actions().mouseMove(element(this.getElement(locatorWithType))).mouseMove({
      x: 50,
      y: 0
    }).perform();
  };

  this.windowHandles = function (winid) {
    browser.getAllWindowHandles().then(function(handles) {
      browser.driver.switchTo().window(handles[winid]);
      });
  };

  this.getPageURL = function(){
    return browser.getCurrentUrl();
}

this.getPageTitle = function(){
  return browser.getTitle();
}

this.getText = function(locatorWithType){
  return element(this.getElement(locatorWithType)).getText();
}

this.getAttribute = function(locatorWithType,attributeName){
  return element(this.getElement(locatorWithType)).getAttribute(attributeName);
}

this.isEnable = function(locatorWithType){
  return element(this.getElement(locatorWithType)).isEnabled();
}

this.clearText = function(locatorWithType){
  return element(this.getElement(locatorWithType)).clear();
}

this.closePage = function(){
  return browser.driver.close();
}

  this.hardPause = function (timeToWait) {
    browser.sleep(timeToWait * 1000);
  };

  this.waitForElement = function (locatorWithType, timeTowait) {
    browser.wait(function () {
      var locatorType = locatorWithType.toString().split(/:(.+)/)[0];
      var locatorValue = locatorWithType.split(/:(.+)/)[1];
      switch (locatorType) {
        case "XPATH":
          return element(by.xpath(locatorValue)).isDisplayed();
        case "ID":
          return element(by.id(locatorValue)).isDisplayed();
        case "NAME":
          return element(by.name(locatorValue)).isDisplayed();
        case "MODEL":
          return element(by.model(locatorValue)).isDisplayed();
        case "CSS":
          return element(by.css(locatorValue)).isDisplayed();
        case "BUTTON_TEXT":
          return element(by.buttonText(locatorValue)).isDisplayed();
        case "LINK_TEXT":
          return element(by.linkText(locatorValue)).isDisplayed();
        case "PARTIAL_LINK_TEXT":
          return element(by.partialLinkText(locatorValue)).isDisplayed();
        default:
          return null;
      }
    }, timeTowait * 1000);
  };

  this.getElement = function (locator) {
    var locatorType = locator.toString().split(/:(.+)/)[0];
    var locatorValue = locator.split(/:(.+)/)[1];
    switch (locatorType) {
      case "XPATH":
        return by.xpath(locatorValue);
      case "ID":
        return by.id(locatorValue);
      case "NAME":
        return by.name(locatorValue);
      case "MODEL":
        return by.model(locatorValue);
      case "CSS":
        return by.css(locatorValue);
      case "BUTTON_TEXT":
        return by.buttonText(locatorValue);
      case "LINK_TEXT":
        return by.linkText(locatorValue);
      case "PARTIAL_LINK_TEXT":
        return by.partialLinkText(locatorValue);
      case "CLASS_NAME":
        return by.className(locatorValue);
      default:
        return null;
    }
  };
};
module.exports = new browserAction();