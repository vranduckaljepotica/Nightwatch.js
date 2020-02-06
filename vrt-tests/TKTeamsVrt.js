module.exports = {
    '@disabled': true,
    'TimeKeeper - Teams VRT' (browser) {

        
        browser
        .url("http://localhost:3000/")
        .useXpath()
        .moveToElement('//*[@id="root"]/div/nav/ul/li[2]/a', 10, 10)
        .click('//*[@id="root"]/div/nav/ul/li[2]/a')
        .moveToElement('//*[@id="home-menu"]/div[3]/ul/a[3]/li', 10, 10)
        .click('//*[@id="home-menu"]/div[3]/ul/a[3]/li')
        .waitForElementVisible('//*[@id="team"]', 2000)
        .assert.screenshotIdenticalToBaseline('//*[@id="team"]',  /* Optional */ 'Teams')
        .end()
    }
    
}