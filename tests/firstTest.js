// module.exports = {
//     'My first test case'(browser) {
//         browser
//             .url('https://news.ycombinator.com/')
//             .waitForElementVisible('.hnname')
//             .assert.containsText('.hnname', "Hacker News");
//     }
// }

module.exports = {
    'step one: navigate to app' : function (browser) {
      browser
        .url('localhost:8080')
        .waitForElementVisible('#app', 1000)
        .setValue('input[type=text]', 'Testing Nightwatch here')
        .waitForElementVisible('input[type=submit]', 1000)
    },
  
    'step two: click submit' : function (browser) {
      browser
        .click('input[type=submit]')
        .pause(1000)
        .elements('css selector', 'div.todo-item', function(result) {
            console.log('result value is:', result);
            // this.assert.containsText('p', 'Testing Nightwatch here') 
            if(result.value === 'Testing Nightwatch here') {
                console.log('My test code is working');
            }           
        })
        // .getText('div.todo-item', function(result) {
        //     console.log(result);
        // })
        .end();
    }
  };