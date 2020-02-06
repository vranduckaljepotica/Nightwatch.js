module.exports = {
    '@tags' : ['google'],
    'Gooogle adc search - Elon Musk'(browser){
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const langugageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const locationDropdownOpenerSelector = '#as_occt_button';
        const locationDropdownValueSelector = '.goog-menuitem[value="title"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        browser
        .url('https://www.google.com/advanced_search')
        .setValue(mainQueryInputSelector, mainQuery)
        .saveScreenshot('tests_output/google.png')
        .click(langugageDropdownOpenerSelector)
        .click(languageDropdownValueSelector)
        .saveScreenshot('tests_output/google1.png')
        .click(lastUpdateDropdownOpenerSelector)
        .click(lastUpdateDropdownValueSelector)
        .saveScreenshot('tests_output/google2.png')
        .click(locationDropdownOpenerSelector)
        .click(locationDropdownValueSelector)
        .saveScreenshot('tests_output/google3.png')
        .click(submitButtonSelector)
        .saveScreenshot('tests_output/google4.png')
    }
}