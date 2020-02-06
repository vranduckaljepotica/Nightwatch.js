module.exports = {
    '@disabled': true,
    '@tags' : ['team'],
    'TimeKeeper Team'(browser){
        const carrouselSelectorNext = 'button.slick-arrow.slick-next'


        browser
        .url('http://localhost:3000/')
        
        .click(carrouselSelectorNext)
        .saveScreenshot('tests_output/team1.png')

        
        .end()

    }







    
}