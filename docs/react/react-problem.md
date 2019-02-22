# React 问题记录

## 1. 自定义 ESlint 配置

**问题**

使用 antd 的过程中,需要使用带样式`<a>`标签,但是 ESLint 的默认配置会要求`<a>`标签必须添加合法的`href`的属性

**解决过程**

[参考 eslint-config-react-app 最后一段话](https://www.npmjs.com/package/eslint-config-react-app)

> However, if you are using Create React App and have not ejected, any additional rules will only be displayed in the IDE integrations, but not in the browser or the terminal.

所以,在 eject 之后,修改 package.json 的 eslingConfig 中的配置才会在浏览器和终端中生效,否则之后在 IDE 中生效

## 2. CRA eject 后 antd 的主题定制

antd 的 css 样式使用 less 开发，可以使用 less 提供的`modifyVars`的方式修改 less 文件中定义的变量

将使用 create-react-app 创建的项目 eject

```bash
yarn eject
```

安装 less，less-loader，babel-plugin-import 插件

```bash
yarn add less less-loader babel-plugin-import --dev
```

修改 package.json 文件中 babel 的配置

```
"babel": {
  "presets": [
    "react-app"
  ],
+ "plugins": [
+   [
+     "import",
+     {
+       "libraryName": "antd",
+       "libraryDirectory": "lib",
+       "style": true
+     }
+   ]
+ ]
},
```

修改 config 目录下面的 webpack.config.js 文件，增加对 less 文件的解析

一、 定义 less 文件匹配的全局变量

```javascript
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
```

二、 CRA 预置了对 sass 文件的解析代码，直接复制一份修改，使其支持 less 文件的解析

```javascript
// Opt-in support for LESS (using .less extensions).
// By default we support LESS Modules with the
// extensions .module.less
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
    },
    'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
// Adds support for CSS Modules, but using LESS
// using the extension .module.less
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
  ),
},
```

三、通过`modifyVars`修改 less 变量，定制全局样式

```javascript
if (preProcessor) {
+ const loaderInitialOption = {
+   sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
+ }
+ if (preProcessor === 'less-loader') {
+   Object.assign(loaderInitialOption, {
+     modifyVars: {
+       'primary-color': '#CE3D3A',
+       'link-color': '#CE3D3A',
+     },
+     javascriptEnabled: true,
+   })
+ }
  loaders.push({
    loader: require.resolve(preProcessor),
-   options: {
-     sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
-   },
+   options: loaderInitialOption,
  });
}
```



