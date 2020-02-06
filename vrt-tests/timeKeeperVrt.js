// //var page = require('../TimeKeeper.js')
// module.exports = {
//     '@disabled': true,
//     'TimeKeeper Static VRT'(browser) {
//         const timeKeeperSelector = 'div#root',
        
//         const page = browser.page.TimeKeeper();
//         const contactUs = browser.page.contactUs();

//         page
//         .navigate()
//         .navigator('@home')
//         .navigator('@about')
//         .assert.screenshotIdenticalToBaseline(timeKeeperSelector,  /* Optional */ 'Home Page')
//         // .navigator('@home')
//         // .navigator('@services')
//         // .navigator('@home')
//         // .navigator('@teams')
//         // .navigator('@caroussel')
//         // .navigator('@caroussel')

//         // contactUs
//         // .navigate()
//         // .contact('@nameField', config.name)
//         // .contact('@emailField', config.email)
//         // .contact('@phoneNumberField', config.phone)
//         // .contact('@messageField', config.message)
//         // .sendMessage()
//         // .end()
//     }
// }