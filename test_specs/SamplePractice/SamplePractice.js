describe("Perform different test in UIPratice", function () {
it("TC_01 Perform drag and drop", function () {
  browser.driver.manage().window().maximize();
  browser.driver.get("http://uitestpractice.com/");

  browser.actions().dragAndDrop(element(by.id('draggable')),element(by.id('droppable'))).perform();
  });


it("TC_02 Perform Double Click", function () {

  browser.actions().mouseMove(element(by.name('dblClick'))).doubleClick().perform();
  browser.switchTo().alert().accept();
  });

it("TC_03 Enter you name inside an Iframe text box", function () {

  //browser.switchTo().frame(element(by.name('iframe_a')));
  browser.switchTo().frame(0);
  element(by.id('name')).sendKeys('Kumar Saheb');
  
});

it("TC_04 Click link inside the Iframe", function () {

 // element(by.linkText('uitestpractice.com')).click();
  browser.switchTo().defaultContent();
  });

it("TC_05 Click on link to open link in new tab", function () {

  element(by.linkText('Visit uitest practice')).click();
  browser.getAllWindowHandles().then(function(handles) {
  browser.driver.switchTo().window(handles[1]);
  });  
  browser.sleep(5000);
  browser.driver.close();
  browser.getAllWindowHandles().then(function(handles) {
  browser.driver.switchTo().window(handles[0]);
  });    
});

it("TC_06 Click on link to open link in new window", function () {

  element(by.linkText('Click here to watch videos on C#')).click();
  browser.getAllWindowHandles().then(function(handles) {
  browser.driver.switchTo().window(handles[1]);
  });  
  browser.sleep(5000);
  browser.driver.close();
  browser.getAllWindowHandles().then(function(handles) {
  browser.driver.switchTo().window(handles[0]);
  });    
});


it("TC_07 Click on different tabs of accordian control", function () {

  element(by.xpath("//h3[@aria-controls='accordian1']")).click();
  element(by.xpath("//h3[@aria-controls='accordian2']")).click();
  element(by.xpath("//h3[@aria-controls='accordian3']")).click();
  element(by.xpath("//h3[@aria-controls='accordian4']")).click();
  

});
    
  
});

      

