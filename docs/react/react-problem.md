# React 问题记录

## 自定义 ESlint 配置

**问题**

使用 antd 的过程中,需要使用带样式`<a>`标签,但是 ESLint 的默认配置会要求`<a>`标签必须添加合法的`href`的属性

**解决过程**

[参考 eslint-config-react-app 最后一段话](https://www.npmjs.com/package/eslint-config-react-app)

> However, if you are using Create React App and have not ejected, any additional rules will only be displayed in the IDE integrations, but not in the browser or the terminal.

所以,在 eject 之后,修改 package.json 的 eslingConfig 中的配置才会在浏览器和终端中生效,否则之后在 IDE 中生效