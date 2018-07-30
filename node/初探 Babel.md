# 初探 Babel

[https://segmentfault.com/a/1190000011155061](https://segmentfault.com/a/1190000011155061)

[https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)


## babel-cli

命令行使用 Babel 编译文件

```bash
babel index.js # 编译 index.js 输出到终端
babel index.js -o target.js # 编译 index.js 输出到 target.js
babel src -d build  # 编译整个目录
```

## babel-register

在 register.js 写入如下代码

```javascript
require("babel-register");
require("./index.js");
```

可以通过 `node register.js` 代替 `node index.js` 执行