// module.exports = {
//     'My first test case'(browser) {
//         browser
//             .url('https://news.ycombinator.com/')
//             .waitForElementVisible('.hnname')
//             .assert.containsText('.hnname', "Hacker News");
//     }
// }

module.exports = {
    'step one: write tasks' : function (browser) {
      browser
        .url('localhost:8080')
        .waitForElementVisible('div#nav', 200)
        .setValue('input[type=text]', 'Testing Nightwatch here')
        .click('input[type=submit]')
        .setValue('input[type=text]', 'This task is done')
        .click('input[type=submit]')
        .setValue('input[type=text]', 'This task is done too')
        .click('input[type=submit]')
        .setValue('input[type=text]', 'This task is not done')
        .click('input[type=submit]')
    },
  
    'step two: checklist done' : function (browser) {
      browser
        .click('div > div:nth-of-type(7) > div > p > input[type=checkbox]')
        .click('div > div:nth-of-type(8) > div > p > input[type=checkbox]')
        .click('div > div:nth-of-type(4) > div > p > button')
        .assert.containsText('div > div:nth-of-type(6) > div > p > span.txt', "Testing Nightwatch here")
        .getText('div > div:nth-of-type(6) > div > p > span.txt', function(result) {
            if(result.value === "Testing Nightwatch here") {
              console.log("The matched text is: ", result.value);
            }
        })
        .expect.elements('p').count.to.equal(8)
        browser.saveScreenshot('tests/screenshots/test.png')
        .end();
    }
  };