var express = require('express');
var router = express.Router();
var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;

router.get('/', function(req, res, next) {
  res.render('selenium', { title: 'selenium' });
});

router.post('/',function(req,res){
    console.log("start");
    var driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.quit();
    console.log("stop");
    res.render('selenium',{
        title:'selenium',
        test_status: "test is done",
    });
});

module.exports = router;