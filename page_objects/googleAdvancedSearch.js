const pageCommands = { 
    setQuery(value) {
        return this
        .setValue('@mainQueryInput', value);

    },

    selectFilter(selector, value) {
        return this
            .click(selector)
            .click(`.goog-menuitem[value="${value}"]`)
        
    },

    search() {
        return this
        .click('@submitButton')
        
    }
}
module.exports = {
    url: "https://www.google.com/advanced_search",
    elements: {
        mainQueryInput : 'input[name="as_q"]',
        languageDropdown : '#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        locationDropdown : '#as_occt_button',
        submitButton : '.jfk-button[type="submit"]'
    },
    commands: [pageCommands]
}
//postavka page_objects modela
//command se ne pišu ukoliko postoje custom commands u drugom file-u