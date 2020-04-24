var logger = require('../utils/log');
var browserAction = require('../utils/browserUtils');
var locator = require("../object_repository/locators.json");
var utility = require('../utils/utility');
var abcd = require('../utils/customlocators.js');

var netStorage_UA_Page = function () {

	// Create a new application as SuperAdmin
	this.createApplicationAsSuperAdmin = function (testData) {
		browser.waitForAngularEnabled(false);
		browserAction.click(locator.applicationsPage.applicationsTabButton);
		browserAction.click(locator.applicationsPage.addApplicationsButton);
		browserAction.setText(locator.applicationsPage.enterApplicationsName, testData.saApplicationName );
		browserAction.setText(locator.applicationsPage.enterApplicationsOwnerName, testData.saApplicationOwnerName);
		browserAction.click(locator.applicationsPage.createApplicationsButton);
		

	};



	

};
module.exports = new netStorage_UA_Page(); 
