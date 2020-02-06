const pageCommands =  {
    clickOnLogin(){
        return this
        .click('@loginButton')
        //.saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
    },
    login (user, pass) {
        return this
        .setValue('@UsernameInput', user)
        .setValue('@PasswordInput', pass)
        .click('@loginButton2')
        //.saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
    },
    
}

module.exports = {
    url: "http://localhost:3000/",
    elements: {
        loginButton: {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/nav/ul/li[5]/button'
        },
        UsernameInput: '#username',
        PasswordInput: '#password',
        loginButton2: 'button.input-button.login-btn.shadow-1',
        
    },
    commands: [pageCommands]
}