
var loginData = require('../test_data/login_test_data.json');
var mainData = require('../test_data/main_test_data.json');

module.exports = {
  createFalconDataProvider: {
    'Cobra SG': {
      superAdminUsername: loginData.superAdmin.userName,
      appAdminUsername: loginData.appAdmin.userName,
      qaTesterUsername: loginData.qaTester.userName,
      guestUsername: loginData.guest.userName,
      saApplicationName: mainData.applicationName.superAdmin,
      saApplicationOwnerName: mainData.applicationOwnerName.superAdmin,
      // saApplicationType: mainData.superAdmin.applicationType,
      // aaApplicationName: mainData.appAdmin.applicationName,
      // aaApplicationOwnerName: mainData.appAdmin.applicationOwnerName,
      // aaApplicationType: mainData.appAdmin.applicationType,

    }
  }
  
};
