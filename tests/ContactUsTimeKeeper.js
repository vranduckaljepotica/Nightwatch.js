module.exports = {
    '@disabled': true,
    '@tags' : ['contact'],
    'TimeKeeper Contact Us'(browser){
        

        
        browser
        .url('http://localhost:3000/')
        .setValue(nameFieldSelector, nameFieldValue)
        .saveScreenshot('tests_output/contact-us.png')
        .setValue(emailFieldSelector, emailFieldValue)
        .saveScreenshot('tests_output/contact-us1.png')
        .setValue(phoneNumberFieldSelector, phoneNumberValue)
        .saveScreenshot('tests_output/contact-us2.png')
        .setValue(messageFieldSelector, messageFieldValue)
        .saveScreenshot('tests_output/contact-us3.png')
        .click(sendMessageButtonSelector)
        .saveScreenshot('tests_output/contact-us4.png')
        .end()

    }
}