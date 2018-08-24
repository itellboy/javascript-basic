module.exports = {
  title: 'Docs',
  description: '不知道接下来干嘛?',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpeg' }]
  ],
  // evergreen: true,
  themeConfig: {
    repo: 'https://github.com/itellboy/docs',
    lastUpdated: '上次更新',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: 'ES5', link: '/es5/' },
      { text: 'ES2015+', link: '/es6/' },
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'canvas 画布',
        children: [
          '/canvas/canvas-guide'
        ]
      }, {
        title: 'CSS',
        children: [
          '/css/css3-transform',
          '/css/css3-selector',
          '/css/flex',
        ]
      }, {
        title: 'ES5',
        children: [
          '/es5/datatype',
          '/es5/array',
          '/es5/wrapper',
          '/es5/boolean',
          '/es5/string',
          '/es5/number',
          '/es5/regexp',
          '/es5/prototype',
          '/es5/dom/css-operator',
          '/es5/dom/document',
          '/es5/dom/dom',
          '/es5/dom/element',
          '/es5/event/event',
          '/es5/event/eventtarget',
          '/es5/event/event-model',
        ]
      }, {
        title: 'ES2015+',
        children: [
          '/es6/async',
          '/es6/class',
          '/es6/class-inherit',
          '/es6/generator',
          '/es6/generator-async',
          '/es6/iterator',
          '/es6/let-and-const',
          '/es6/module',
          '/es6/promise',
          '/es6/set-and-map',
          '/es6/symbol',
          '/es6/function',
          '/es6/destructuring',
          '/es6/string',
          '/es6/object',
          '/es6/number',
          '/es6/array',
          '/es6/regexp',
        ]
      }, {
        title: 'database',
        children: [
          '/database/mongodb-install',
          '/database/mongodb-roles',
          '/database/mongodb',
          '/database/mongodb-backup',
          '/database/mysql-problems',
          '/database/mysql-sql_mode',
        ]
      }, {
        title: 'Nginx',
        children: [
          '/nginx/static-resource',
          '/nginx/upstream',
          '/nginx/proxy-server',
          '/nginx/basic-config',
          '/nginx/module-config',
          '/nginx/access-control',
          '/nginx/req-and-connection-limitation',
          '/nginx/install-params',
          '/nginx/https'
        ]
      }, {
        title: 'Node',
        children: [
          '/node/global',
          '/node/commonjs',
          '/node/buffer',
          '/node/path',
          '/node/process',
          '/node/fs',
          '/node/querystring',
          '/node/console',
          '/node/events',
          '/node/puppeteer',
          '/node/babel',
          '/node/npm-packages',
          '/node/mongoose',
          '/node/mongoose-api',
        ]
      }, {
        title: '理解计算机',
        children: [
          '/computer-basic/unicode',
        ]
      }, {
        title: 'Centos7.X',
        children: [
          '/linux/service',
          '/linux/git',
          '/linux/redis',
          '/linux/lamp-and-lnmp',
          '/linux/shell',
          '/linux/vim',
          '/linux/vsftpd',
          '/linux/shutdown-and-reboot',
          '/linux/install-and-login',
          '/linux/help',
          '/linux/mount',
          '/linux/file-operator',
          '/linux/file-search',
          '/linux/user-and-firewall',
          '/linux/directory',
          '/linux/net',
        ]
      }, {
        title: 'other',
        children: [
          '/other/koa2',
          '/other/vuex'
        ]
      },
    ],
  }
}