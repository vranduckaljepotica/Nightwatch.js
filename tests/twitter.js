module.exports = {
    '@disabled': true,
    '@tags' : ['twitter'],
    'Tweet'(browser){
        const tweetFieldSelector = 'div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr'
        const newTweet = 'Nightwatch tweet.'

        browser
        .url('https://twitter.com/home')
        
        .setValue(tweetFieldSelector, newTweet)
        .useXpath()
        .click('//*[@id="react-root"]/div/div/div/main/div/div/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[3]')
        .end()
    }
}