const pageCommands = {
    navigator(selector) {
        return this
        .click(selector)
        .pause(1000)
        .saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
    }
}

module.exports = {
    url: "http://localhost:3000/",

    elements: {
        reports : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/nav/ul/li[4]/a'
        },
        timeTracking: {
            locateStrategy: 'xpath',
            selector: '//*[@id="reports-menu"]/div[3]/ul/a[1]/li'
        },
        personalReport: {
            locateStrategy: 'xpath',
            selector: '//*[@id="reports-menu"]/div[3]/ul/a[2]/li'
        },
        projects: {
            locateStrategy: 'xpath',
            selector: '//*[@id="reports-menu"]/div[3]/ul/a[3]/li'
        },
        teamReport: {
            locateStrategy: 'xpath',
            selector: '//*[@id="reports-menu"]/div[3]/ul/a[4]/li'
        },
        title : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[1]/h2'
        },
        calendar : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div/div/div[1]'
        }
    },
    commands : [pageCommands]
    
}