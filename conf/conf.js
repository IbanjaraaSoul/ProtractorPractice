exports.config = {
 // seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: ['../test_specs/SamplePractice/SamplePractice.js'],
   onPrepare: function() {
   browser.waitForAngularEnabled(false);
   browser.ignoreSynchronization = true;
   //browser.driver.manage().timeouts().implicitlyWait(6000);
},
jasmineNodeOpts: {
  //defaultTimeoutInterval: 60000
}
};