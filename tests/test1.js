describe ('open browser', function() {
   beforeEach(function(){
      browser.ignoreSynchronization = true
    });
    
it ('open mail browser', function() {
    
    browser.driver.get('http://gmail.com');
    browser.driver.findElement(by.name('identifier')).sendKeys('four4sfamily@gmail.com');
    browser.sleep(3000)
    browser.driver.findElement(by.id('identifierNext')).click();
    browser.sleep(3000);
    browser.driver.findElement(by.xpath("//input[@type='password']")).sendKeys('login@123');
    browser.sleep(3000);
    browser.driver.findElement(by.id('passwordNext')).click();
    browser.sleep(3000);
    browser.driver.findElement(by.className('T-I J-J5-Ji T-I-KE L3')).click();
    browser.sleep(3000);
    browser.driver.findElement(by.name('to')).sendKeys('sathiyakala88@gmail.com');
    browser.sleep(3000);
    browser.driver.findElement(by.name('subjectbox')).sendKeys('test mail');
    browser.sleep(3000);
    browser.driver.findElement(by.className('T-I J-J5-Ji aoO v7 T-I-atl L3')).click();//send
    browser.sleep(3000);
    browser.driver.findElement(by.className('J-Ke n0')).click(); //inbox click
    browser.sleep(3000);
    browser.driver.findElement(by.className('aeF')).click(); //mail open
    browser.sleep(3000);
    browser.driver.findElement(by.className('T-I J-J5-Ji T-I-Js-Gs aap T-I-awG T-I-ax7 L3')).click(); //forward icon
    browser.sleep(3000);
    browser.driver.findElement(by.className('ams bkG')).click(); // forward
    browser.sleep(3000);
    browser.driver.findElement(by.name('to')).sendKeys('sathiyakala88@gmail.com');
    browser.sleep(3000);
    browser.driver.findElement(by.className('T-I J-J5-Ji aoO v7 T-I-atl L3')).click(); //send
    browser.sleep(3000);
});
});

 
