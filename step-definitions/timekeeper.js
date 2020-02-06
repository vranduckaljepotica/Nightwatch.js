// const { client } = require('nightwatch-api');
// const { Given, Then, When} = require('cucumber');
// var config = require('../test.config')

// Given(/^I open TimeKeeper Static Pages$/, () => {
//     return client.url('http://localhost:3000/').waitForElementVisible('body', 1000);
//   });
  
// Then(/^the About page exists$/, () => {
//   return client
//   .useCss()
//   .assert.visible('section#about');
// });
// Then(/^the Services page exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('section#services');
//   });
//   Then(/^the Teams page exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('section#team');
//   });
//   Then(/^the Contact Us page exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('section#contact');
//   });

//   Then(/^the Name field exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('input#name');
//   });
//   Then(/^Type name and surname into name field$/, () => {
//     return client
//     .useCss()
//     .setValue('input#name', config.name)
//   });

//   Then(/^the Email field exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('input#email');
//   });
//   Then(/^Type email into email field$/, () => {
//     return client
//     .useCss()
//     .setValue('input#email', config.email)
//   });
//   Then(/^the Phone field exists$/, () => {
//     return client
//     .assert.visible('input#phone');
//   });
//   Then(/^Type phone into phone field$/, () => {
//     return client
//     .useCss()
//     .setValue('input#phone', config.phone)
//   });
//   Then(/^the Message field exists$/, () => {
//     return client
//     .useCss()
//     .assert.visible('#message');
//   });
//   Then(/^Type message into message field$/, () => {
//     return client
//     .useCss()
//     .setValue('#message', config.message)
//   });
//   When(/^You fill the form$/, () => {
//     return client
//     .useXpath()
//     .assert.visible('//*[@id="contact-inputs"]/div/div[2]/div[2]/button/span[1]');
//   });
//   Then(/^Send Message$/, () => {
//     return client
//     .useXpath()
//     .click('//*[@id="contact-inputs"]/div/div[2]/div[2]/button/span[1]')
//   });

//   When(/^I go to Login$/, () => {
//     return client
//     .useXpath()
//     .assert.visible('//*[@id="root"]/div/nav/ul/li[5]/button');
//   });
//   Then(/^Login form exists$/, () => {
//     return client
//     .useXpath()
//     .click('//*[@id="root"]/div/nav/ul/li[5]/button')
//   });
  
//   Then(/^Username field exists$/, () => {
//     return client
//     .useXpath()
//     .moveToElement('//*[@id="Username"]', 300, 300)
//     .assert.visible('//*[@id="Username"]');
//   });
//   Then(/^Type username in username field$/, () => {
//     return client
//     .useXpath()
//     .setValue('//*[@id="Username"]', config.user)
//   });

//   Then(/^Password field exists$/, () => {
//     return client
//     .useXpath()
//     .moveToElement('//*[@id="Password"]', 300, 300)
//     .assert.visible('//*[@id="Password"]');
//   });
//   Then(/^Type password in password field$/, () => {
//     return client
//     .useXpath()
//     .setValue('//*[@id="Password"]', config.pass)
//   });

//   When(/^you fill the login form$/, () => {
//     return client
//     .useXpath()
//     .moveToElement('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]', 300, 300)
//     .assert.visible('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]');
//   });
//   Then(/^You log in$/, () => {
//     return client
//     .useXpath()
//     .click('/html/body/div[2]/div/div[2]/div/div/div[2]/form/fieldset/div[4]/button[1]')
//   });

  