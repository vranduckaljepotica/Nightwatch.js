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
        database : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/nav/ul/li[3]/a'
        },
        employees : {
            locateStrategy: 'xpath',
            selector: '//*[@id="database-menu"]/div[3]/ul/a[1]/li'
        },
        customers : {
            locateStrategy: 'xpath',
            selector: '//*[@id="database-menu"]/div[3]/ul/a[2]/li'
        },
        projects : {
            locateStrategy: 'xpath',
            selector: '//*[@id="database-menu"]/div[3]/ul/a[3]/li'
        },
        teams : {
            locateStrategy: 'xpath',
            selector: '//*[@id="database-menu"]/div[3]/ul/a[4]/li'
        },
        carrouselDB : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[2]/div/div/div[1]/div/button[2]'
        },
        team : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[2]/div/div/div[1]/div/div/div/div[5]/div/div'
        },
        employeesTitle : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[1]/h2'
        }, 
        customersTitle : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[1]/h2'
        },
        projectsTitle : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[1]/h2'
        },
        teamsTitle : {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/main/div[1]/h2'
        }
    },
    commands : [pageCommands]
    
}