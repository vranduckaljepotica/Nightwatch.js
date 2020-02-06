const pageCommands = {
    contact(selector, value){
        return this
        .setValue(selector, value)
        .saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
      },
    sendMessage(selector){
        return this
        .click('@sendMessageButton')
    }
}
module.exports = {
    url: "http://localhost:3000/",
    elements: {
        nameField : {
            locateStrategy: 'xpath',
            selector: '//*[@id="contact-inputs"]/div/div[1]/div[1]/div/input'
        },
        emailField : {
            locateStrategy: 'xpath',
            selector: '//*[@id="contact-inputs"]/div/div[1]/div[2]/div/input'
        }, 
        phoneNumberField : {
            locateStrategy: 'xpath',
            selector: '//*[@id="contact-inputs"]/div/div[1]/div[3]/div/input'
        },
        messageField : {
            locateStrategy: 'xpath',
            selector: '//*[@id="contact-inputs"]/div/div[2]/div[1]/div/textarea'
        },
        sendMessageButton : {
            locateStrategy: 'xpath',
            selector: '//*[@id="contact-inputs"]/div/div[2]/div[2]/button'
        }
    },
    commands: [pageCommands]
}