// const { client } = require('nightwatch-api');
// const { Given, Then} = require('cucumber');

// Given(/^I open Hacker News home page$/, () => {
//   return client.url('https://news.ycombinator.com/news').waitForElementVisible('body', 1000);
// });

// Then(/^the title is "([^"]*)"$/, title => {
//   return client.assert.title(title);
// });

// Then(/^the Hacker News search form exists$/, () => {
//   return client
//   .moveToElement('input[name="q"]', 80, 80)
//   .assert.visible('input[name="q"]');
// });


// Given(/^I open Hacker News home page$/, () => {
//     return client.url('http://localhost:3000/').waitForElementVisible('body', 5000);
//   });