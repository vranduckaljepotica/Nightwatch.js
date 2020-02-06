module.exports = {
     '@disabled': true,
    'TimeKeeper - Services VRT' (browser) {
        
        browser
        .url("http://localhost:3000/")
        .useXpath()
        .moveToElement('//*[@id="root"]/div/nav/ul/li[2]/a', 10, 10)
        .click('//*[@id="root"]/div/nav/ul/li[2]/a')
        .moveToElement('//*[@id="home-menu"]/div[3]/ul/a[2]/li', 10, 10)
        .click('//*[@id="home-menu"]/div[3]/ul/a[2]/li')
        .waitForElementVisible('//*[@id="services"]', 5000)
        .assert.screenshotIdenticalToBaseline('//*[@id="services"]',  /* Optional */ 'Services')
        .end()
    }
}