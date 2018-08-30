# Navigator 对象，Screen 对象

`window.navigator`包含一个浏览器和系统信息的`Navigator`对象，可以通过这个对象来获取环境信息

## Navigator 对象的属性

**navigator.userAgent**

返回当前浏览器的厂商和版本信息，可以通过该字段判断是否为手机浏览器

```javascript
/mobi/i.test(navigator.userAgent)
```

**navigator.plugins**

返回一个类似数组的对象，成员为浏览器已经安装的插件

**navigator.platform**

返回用户操作系统的信息，比如`MacIntel`、`Win32`、`Linux x86_64`等等

**navigator.onLine**

表示当前浏览器是离线还是在线

用户在线状态改变会触发`online`事件和`offline`事件

**navigator.language, navigator.languages**

* `navigator.language`：返回浏览器的首选语言
* `navigator.languages`：返回浏览器的可选语言数组

**navigator.geolocation**

返回一个`Geolocation`对象，包含用户的位置信息，该对象的 API 只有在 HTTPS 协议下才可使用，`Geolocation`对象具有下面三个方法

* `geolocation.getCurrentLocation()`：返回用户的当前位置
* `geolocation.watchPosition()`：监听用户位置变化
* `geolocation.clearWatch()`：取消监听

**navigator.cookieEnabled**

返回一个布尔值，表示浏览器的 Cookie 功能是否打开

## Navigator 对象的方法

**navigator.javaEnabled()**

返回一个布尔值，表示浏览器是否能运行 JavaApplet 小程序

**navigarot.sendBeacon()**

用户向服务器发送数据

## Screen 对象

提供包含当前屏幕属性的对象，该对象具有以下属性

* `screen.width`：屏幕宽度
* `screen.height`：屏幕高度
* `screen.availHeight`：浏览器可以屏幕高度，屏幕高度除去任务栏等高度
* `screen.availWidth`：浏览器可用屏幕宽度
* `screen.pixelDepth`：屏幕的色彩位数
* `screen.colorDepth`：`screen.pixelDepth`的别名
* `screen.orientation`：返回一个对象，表示屏幕的方向