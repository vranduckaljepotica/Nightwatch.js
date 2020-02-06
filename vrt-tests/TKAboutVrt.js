module.exports = {
    //'@disabled': true,
    'TimeKeeper - About VRT' (browser) {
        const aboutSelector = 'section#about.hero';
        
        browser
        .url("http://localhost:3000/")
        .assert.screenshotIdenticalToBaseline(aboutSelector,  /* Optional */ 'About')
        .end()
    }
}
