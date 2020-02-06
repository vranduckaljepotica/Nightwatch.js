var config = require('../test.config')

module.exports = {
     '@tags' : ['end-to-end'],
    'TimeKeeper End-To-End'(browser){
        browser.maximizeWindow();
        const database = browser.page.database();
        const page = browser.page.TimeKeeper();
        const contactUs = browser.page.contactUs();
        const reports = browser.page.reports();


        database
        .navigate()
        .navigator('@database')
        .navigator('@employees')
        .waitForElementVisible('@employeesTitle', 2000, 'Table of employees successfully loaded.')
        .navigator('@database')
        .navigator('@customers')
        .waitForElementVisible('@customersTitle', 2000, 'Table of customers successfully loaded.')
        .navigator('@database')
        .navigator('@projects')
        .waitForElementVisible('@projectsTitle', 2000, 'Table of projects successfully loaded.')
        .navigator('@database')
        .navigator('@teams')
        .waitForElementVisible('@teamsTitle', 2000, 'Teams are successfully loaded.')
        .navigator('@carrouselDB')
        .navigator('@team')

        reports
        .navigate()
        .navigator('@reports')
        .navigator('@timeTracking')
        .waitForElementVisible('@title', 2000, 'Time tracking successfully loaded.')
        .navigator('@reports')
        .navigator('@personalReport')
        .waitForElementVisible('@calendar', 3000, 'Personal reports page successfully loaded.')
        .navigator('@reports')
        .navigator('@projects')
        .waitForElementVisible('@title', 2000, 'Project reports are successfully loaded.')
        .navigator('@reports')
        .navigator('@teamReport')
        .waitForElementVisible('@title', 2000, 'Team reports are successfully loaded.')


        page
        .navigate()
        .navigator('@home')
        .navigator('@about')
        .waitForElementVisible('@aboutPg', 2000, 'Here is static page, about.')
        .navigator('@home')
        .navigator('@services')
        .waitForElementVisible('@servicesPg', 2000, 'Static page, services.')
        .navigator('@home')
        .navigator('@teams')
        .waitForElementVisible('@teamsPg', 2000, 'Teams static page.')
        .navigator('@caroussel')
        .navigator('@caroussel')
        
        contactUs
        .navigate()
        .contact('@nameField', config.name)
        .waitForElementVisible('@nameField', 2000, 'Name field successfully filled with an information.')
        .contact('@emailField', config.email)
        .waitForElementVisible('@emailField', 2000, 'Email field successfully filled with an information.')
        .contact('@phoneNumberField', config.phone)
        .waitForElementVisible('@phoneNumberField', 2000, 'Phone field successfully filled with an information.')
        .contact('@messageField', config.message)
        .waitForElementVisible('@messageField', 2000, 'Message field successfully filled with an information.')
        .sendMessage()
        
        browser
        .end()
    }
}