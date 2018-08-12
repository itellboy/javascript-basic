module.exports = {
  title: 'Notes',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/itellboy/learn-web' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'README',
        children: ['/']
      }, {
        title: 'canvas',
        children: [
          '/canvas/canvas 简介'
        ]
      }, {
        title: 'CSS',
        children: [
          '/CSS/CSS3 transform',
          '/CSS/CSS3 选择器',
          '/CSS/flex 布局',
        ]
      }, {
        title: 'ES5',
        children: [
          '/ES5/DOM/CSS 操作',
          '/ES5/DOM/Document 节点',
          '/ES5/DOM/DOM',
          '/ES5/DOM/Element 节点',
          '/ES5/事件/Event 对象',
          '/ES5/事件/EventTarget 接口',
          '/ES5/事件/事件模型',
          ['/ES5/JavaScript 原型', 'JavaScript 原型'],
          '/ES5/数据类型',
          ['/ES5/正则表达式', '正则表达式'],
        ]
      }, {
        title: 'ES2015',
        children: [
          '/ES2015/async 函数',
          '/ES2015/class 的基本语法',
          '/ES2015/class 的继承',
          '/ES2015/Generator 函数的异步应用',
          '/ES2015/Generator 函数的语法',
          '/ES2015/Iterator 和 foo...of 循环',
          '/ES2015/let 和 const 命令',
          '/ES2015/Module 的语法',
          '/ES2015/Promise 对象',
          '/ES2015/Set 和 Map 数据结构',
          '/ES2015/Symbol',
          '/ES2015/函数的扩展',
          '/ES2015/变量的解构赋值',
          '/ES2015/字符串的扩展',
          '/ES2015/对象的扩展',
          '/ES2015/数值的扩展',
          '/ES2015/数组的扩展',
          '/ES2015/正则的扩展',
        ]
      }, {
        title: 'database',
        children: [
          '/database/mongodb 安装 (Centos 7)',
          '/database/mongodb 角色',
          '/database/mongoose',
          '/database/mongodb 初探',
          '/database/mysql 常见问题',
          '/database/mysql sql_mode 配置',
        ]
      }, {
        title: 'Nginx',
        children: [
          '/Nginx/Nginx 作为代理服务器',
          '/Nginx/Nginx 作为静态资源服务器',
          '/Nginx/Nginx 作为负载均衡服务器',
          '/Nginx/Nginx 基本配置',
          '/Nginx/Nginx 模块配置',
          '/Nginx/Nginx 访问控制',
          '/Nginx/Nginx 请求和连接限制',
          '/Nginx/基本参数的使用',
        ]
      }, {
        title: 'Node',
        children: [
          '/Node/CommonJS 规范',
          '/Node/path 模块',
          '/Node/puppeteer 的使用',
          '/Node/Babel 初探',
          '/Node/比较常用的 npm package',
        ]
      }, {
        title: '理解计算机',
        children: [
          '/理解计算机/unicode 理解',
        ]
      }, {
        title: '操作系统',
        children: [
          '/操作系统/Linux/Services',
          '/操作系统/Linux/Git',
          '/操作系统/Linux/Redis',
          '/操作系统/Linux/LAMP 和 LNMP',
          '/操作系统/Linux/Shell 基础',
          '/操作系统/Linux/Vim 常用快捷键',
          '/操作系统/Linux/Vsftpd 使用',
          '/操作系统/Linux/关机与重启',
          ['/操作系统/Linux/压缩与解压缩命令', '压缩与解压缩命令'],
          '/操作系统/Linux/安装与 SSH 登录',
          '/操作系统/Linux/帮助命令',
          '/操作系统/Linux/挂载命令',
          '/操作系统/Linux/文件处理命令',
          '/操作系统/Linux/文件搜索命令',
          '/操作系统/Linux/用户和防火墙',
          '/操作系统/Linux/Linux 目录',
          '/操作系统/Linux/网络相关',
        ]
      }, {
        title: 'other',
        children: [
          '/other/koa2 学习',
          '/other/Vuex'
        ]
      },
    ],
  }
}