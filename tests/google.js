module.exports = {
    '@disabled': true,
    '@tags' : ['google'],
    'Gooogle adv search - Elon Musk'(browser){
        const mainQuery = 'Elon Musk';
        const page= browser.page.googleAdvancedSearch();
        //const resultsPageQuerySelector = 'input[name="a"][value="Elon Musk"]';
        var start = new Date();

        page
        .navigate()
        .setQuery(mainQuery)
        .saveScreenshot('tests_output/google.png')

        .selectFilter('@languageDropdown', 'lang_it')
        .saveScreenshot('tests_output/google1.png')

        .selectFilter('@lastUpdateDropdown', 'm')
        .saveScreenshot('tests_output/google2.png')

        .selectFilter('@locationDropdown', 'title')
        .saveScreenshot('tests_output/google3.png')
        
        .search()
        .saveScreenshot('tests_output/google4.png')
        .saveScreenshot('./reports/screenshots/googleSearch' + start.getFullYear() + "_" + (start.getMonth() + 1) + "_" + start.getDate() + '.png');

        browser.end()     
    }
}