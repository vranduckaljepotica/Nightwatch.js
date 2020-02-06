module.exports = {
    '@disabled' : true,
    'My first vrt test case'(browser) {
        const headerSelector = 'td[bgcolor="#ff6600"]';

        browser
        .url('https://news.ycombinator.com/news')
        .waitForElementVisible(headerSelector)
        // .assert.containsText(".hnname", "Hacker News")
        .assert.screenshotIdenticalToBaseline(headerSelector,  /* Optional */ 'hn-header')
        .end()
    }
}