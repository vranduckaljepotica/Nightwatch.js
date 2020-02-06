module.exports = {
    url: "http://localhost:3000/",
    elements: {
        home: {
            locateStrategy: 'xpath',
            selector: '//*[@id="root"]/div/nav/ul/li[2]/a'
        },
        about: {
            locateStrategy: 'xpath',
            selector: '//*[@id="home-menu"]/div[3]/ul/a[1]/li'
        },
        services: {
            locateStrategy: 'xpath',
            selector: '//*[@id="home-menu"]/div[3]/ul/a[2]/li'
        },
        teams: {
            locateStrategy: 'xpath',
            selector: '//*[@id="home-menu"]/div[3]/ul/a[3]/li'
        },
        caroussel: {
            locateStrategy: 'xpath',
            selector: '//*[@id="team"]/div[2]/div/div/button[2]'
        },
        twitter: {
            locateStrategy: 'xpath',
            selector: '//*[@id="team"]/div[2]/div/div/div/div/div[2]/div/div/div/ul/li[2]'
        },
        facebook: {
            locateStrategy: 'xpath',
            selector: '//*[@id="team"]/div[2]/div/div/div/div/div[5]/div/div/div/ul/li[1]'
        },
        aboutPg : {
            selector : 'section#about.hero'
        },
        servicesPg: {
            locateStrategy: 'xpath',
            selector: '//*[@id="services"]'
        },
        teamsPg : {
            locateStrategy: 'xpath',
            selector: '//*[@id="team"]'
        },


    },
    commands: [{
        navigator(selector) {
            return this
            .click(selector)
            .pause(1000)
        
            .saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
        },
        links(selector) {
            return this
            .click(selector)
            .saveScreenshot (`end-to-end/${selector.substring(1,selector.length)}.png`)
        },
        logout(){
            return this
            .waitForElementVisible('@logout', 1500)
            .click('@logout')
        }

        // verifyUrl(nesto) {
           
        //     if(nesto.isVisible())
        //     {
        //         return this
        //         refresh()
        //     }
        //     else
        //     {
        //         console.log('Nest ne valjjaa')
        //     }
    
            
            
        // }
        
    }]
    
}