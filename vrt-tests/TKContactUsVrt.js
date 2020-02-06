module.exports = {
    '@disabled': true,
    'TimeKeeper - Contact Us VRT' (browser) {

        
        browser
        .url("http://localhost:3000/")
        .useXpath()
        .moveToElement('//*[@id="root"]/div/nav/ul/li[2]/a', 10, 10)
        .click('//*[@id="root"]/div/nav/ul/li[2]/a')
        .moveToElement('//*[@id="home-menu"]/div[3]/ul/a[4]/li', 10, 10)
        .click('//*[@id="home-menu"]/div[3]/ul/a[4]/li')
        .waitForElementVisible('//*[@id="contact"]', 2000)
        .assert.screenshotIdenticalToBaseline('//*[@id="contact"]',  /* Optional */ 'Contact Us')
        .end()
    }

}