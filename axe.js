require('chromedriver');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const fs = require('fs');

const localPath = 'http://localhost:8080/components/';
const urlList = [
  'accessible-flyout-menu',
  'alert',
  'background-colors',
  'badges',
  'breadcrumbs',
  'buttons',
  'cards',
  'carousel',
  'code',
  'collapse',
  'dropdowns',
  'forms',
  'images',
  'input-group',
  'jumbotron',
  'list-group',
  'media-object',
  'modalDialogs',
  'navs',
  'pagination',
  'progress',
  'spinners',
  'tables',
  'text',
  'toasts',
  'tooltips',
  'typography',
];

for (let i = 0; i < urlList.length; i++) {
  const currentPage = urlList[i];

  (async function axe() {
    const driver = await new WebDriver.Builder().forBrowser('chrome').build();
    try {
      await driver.get(localPath + currentPage);
      await new AxeBuilder(driver)
        .include('#component')
        .analyze((err, results) => {
          if (err) {
            // Handle error somehow
          }
          // console.log(results.violations);
          const data = JSON.stringify(results.violations);
          fs.writeFileSync(`tests/${currentPage}results.json`, data);
        });
    } finally {
      await driver.quit();
    }
  })();
}
