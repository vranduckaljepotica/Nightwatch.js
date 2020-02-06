module.exports = {
    '@disabled': true,
    '@tags' : ['login'],
    'TimeKeeper Login'(browser){
        const loginButtonSelector = '.nav-button[type="button"]'
        const Username = 'michaeljo'
        const UserameInputSelector = '#username'
        const Password = '123123123'
        const PasswordInputSelector = '#password'
        const loginButtonSelector2 = 'button.input-button.login-btn.shadow-1'

       browser
        .url('http://192.168.60.74:3000/')
        .click(loginButtonSelector)
        .saveScreenshot('login/login.png')
        .setValue(UserameInputSelector, Username)
        .saveScreenshot('login/login1.png')
        .setValue(PasswordInputSelector, Password)
        .saveScreenshot('login/login2.png')
        .click(loginButtonSelector2)
        .pause(1000)
        .saveScreenshot('login/login3.png')
    }
}