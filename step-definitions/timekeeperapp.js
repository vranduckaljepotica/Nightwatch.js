const { client } = require('nightwatch-api');
const { Given, Then, When} = require('cucumber');
var config = require('../test.config')
// var selector = require('../page_objects')

//Given I open TimeKeeper Static Pages
Given(/^I open TimeKeeper Static Pages$/, () => {
    return client.url('http://localhost:3000/').waitForElementVisible('body', 1000);
  });
  //When I go to Login
When(/^I go to Login$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/nav/ul/li[5]/button');
  });
  //Then Login form exists
  Then(/^Login form exists$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/nav/ul/li[5]/button')
  });
  //Then Username field exists
  Then(/^Username field exists$/, () => {
    return client
    .useXpath()
    .moveToElement('//*[@id="Username"]', 300, 300)
    .assert.visible('//*[@id="Username"]');
  });
  //Then Type username in username field
  Then(/^Type username in username field$/, () => {
    return client
    .useXpath()
    .setValue('//*[@id="Username"]', config.user)
  });
//Then Password field exists
  Then(/^Password field exists$/, () => {
    return client
    .useXpath()
    .moveToElement('//*[@id="Password"]', 300, 300)
    .assert.visible('//*[@id="Password"]');
  });
  //Then Type password in password field
  Then(/^Type password in password field$/, () => {
    return client
    .useXpath()
    .setValue('//*[@id="Password"]', config.pass)
  });
//When you fill the login form
  When(/^you fill the login form$/, () => {
    return client
    .useXpath()
    .moveToElement('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]', 300, 300)
    .assert.visible('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]');
  });
  //Then You log in
  Then(/^You log in$/, () => {
    return client
    .useXpath()
    .click('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]')
  });

  //Then Dashboard exists
Then(/^Dashboard exists$/, () => {
  return client
  .useCss()
  .assert.visible('#dashboard');
});
//Then Navigation to Databases exists
Then(/^Navigation to Databases exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
  //Then Database dropdown exists
  Then(/^Database dropdown exists$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
//Then navigation to Employees exists
  Then(/^navigation to Employees exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="database-menu"]/div[3]/ul/a[1]/li');
  });
  //Then I click on Employees to get table
  Then(/^I click on Employees to get table$/, () => {
    return client
    .useXpath()
    .click('//*[@id="database-menu"]/div[3]/ul/a[1]/li');
  });
  //Then Employees table exists
  Then(/^Employees table exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/main');
  });
//Then Navigation to Databases exists again
  Then(/^Navigation to Databases exists again$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .assert.visible('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
  //Then Database dropdown exists again
  Then(/^Database dropdown exists again$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .click('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
//Then navigation to Customers exists
  Then(/^navigation to Customers exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="database-menu"]/div[3]/ul/a[2]/li');
  });
  //Then I click on Customers to get table
  Then(/^I click on Customers to get table$/, () => {
    return client
    .useXpath()
    .click('//*[@id="database-menu"]/div[3]/ul/a[2]/li');
  });
  //Then Customers table exists
  Then(/^Customers table exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/main');
  });
//Then Again navigation to Database dropdown menu exists
  Then(/^Again navigation to Database dropdown menu exists$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .assert.visible('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
  //Then Database dropdown menu exists
  Then(/^Database dropdown menu exists$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .click('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
//Then navigation to Projects exists
  Then(/^navigation to Projects exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="database-menu"]/div[3]/ul/a[3]/li');
  });
  //Then I click on Projects to get table
  Then(/^I click on Projects to get table$/, () => {
    return client
    .useXpath()
    .click('//*[@id="database-menu"]/div[3]/ul/a[3]/li');
  });
  //Then Projects table exists
  Then(/^Projects table exists$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/main');
  });
//     Then Again there is Database menu navigation
  Then(/^Again there is Database menu navigation$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .assert.visible('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
//     Then Again there is Database dropdown
Then(/^Again there is Database dropdown$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .click('//*[@id="root"]/div/nav/ul/li[3]/a');
  });
//     Then there is navigation to Teams
Then(/^there is navigation to Teams$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="database-menu"]/div[3]/ul/a[4]/li');
  });
//     Then I click on Teams
Then(/^I click on Teams$/, () => {
    return client
    .useXpath()
    .click('//*[@id="database-menu"]/div[3]/ul/a[4]/li');
  });
//     Then There is Teams carrousel
Then(/^There is Teams carrousel$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/main');
  });
//     Then There is scroll through carrousel
Then(/^There is scroll through carrousel$/, () => {
    return client
    .useCss()
    .assert.visible('button.slick-arrow.slick-next');
  });
//     Then I click on scroll
Then(/^I click on scroll$/, () => {
    return client
    .useCss()
    .click('button.slick-arrow.slick-next');
  });
  //Then there is Foxtrot Team
  Then(/^there is Foxtrot Team$/, () => {
    return client
    .useXpath()
    .assert.visible('//*[@id="root"]/div/main/div[2]/div/div/div[1]/div/div/div/div[5]/div/div');
  });
  //Then there is info about Foxtrot
  Then(/^there is info about Foxtrot$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/main/div[2]/div/div/div[1]/div/div/div/div[5]/div/div');
  });
