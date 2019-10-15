const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
module.exports = (function (settings) {
  settings.test_workers = false;
  settings.test_settings.default.webdriver.server_path = chromedriver.path;
  settings.test_settings.firefox.webdriver.server_path = geckodriver.path;
  return settings;
})(require("./nightwatch.json"));