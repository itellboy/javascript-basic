# puppeteer 的使用

puppeteer 是一个为 headless chrome 提供多种复杂操作 api 的 node 库，常用于比较复杂的爬虫项目，可模拟真实浏览器进行网页加载，非常强大

下面是一个简单的例子

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```