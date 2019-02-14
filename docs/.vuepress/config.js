module.exports = {
  title: 'Docs',
  description: 'Rome wasn’t built in one day',
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
      ['/welcome', 'Welcome'],
      {
        title: 'ES5',
        children: [
          '/es5/datatype',
          '/es5/array',
          '/es5/wrapper',
          '/es5/boolean',
          '/es5/string',
          '/es5/number',
          '/es5/object',
          '/es5/object-attribute',
          '/es5/math',
          '/es5/date',
          '/es5/json',
          '/es5/regexp',
          '/es5/new',
          '/es5/this',
          '/es5/prototype',
          '/es5/dom/dom',
          '/es5/dom/document',
          '/es5/dom/element',
          '/es5/dom/css-operator',
          '/es5/event/event',
          '/es5/event/eventtarget',
          '/es5/event/event-model',
          '/es5/bom/guide',
          '/es5/bom/window',
          '/es5/bom/navigator',
          '/es5/bom/cookie',
          '/es5/bom/xmlhttprequest',
          '/es5/bom/cors',
          '/es5/bom/location',
          '/es5/bom/storage',
          '/es5/bom/history',
          '/es5/bom/arraybuffer-blob',
          '/es5/bom/file',
          '/es5/bom/form',
          '/es5/style',
        ]
      }, {
        title: 'ES2015+',
        children: [
          '/es6/let-and-const',
          '/es6/destructuring',
          '/es6/string',
          '/es6/regexp',
          '/es6/number',
          '/es6/function',
          '/es6/array',
          '/es6/object',
          '/es6/symbol',
          '/es6/proxy',
          '/es6/reflect',
          '/es6/set-and-map',
          '/es6/iterator',
          '/es6/promise',
          '/es6/class',
          '/es6/class-inherit',
          '/es6/decorator',
          '/es6/generator',
          '/es6/generator-async',
          '/es6/async',
          '/es6/module',
        ]
      }, {
        title: 'CSS',
        children: [
          '/css/html',
          '/css/css-gramma',
          '/css/base',
          '/css/layout',
          '/css/effect',
          '/css/animate',
          '/css/preprocessor',
          '/css/transform',
          '/css/selector',
          '/css/flex',
        ]
      }, {
        title: 'React',
        children: [
          '/react/start',
          '/react/learning-docs',
          '/react/react-problem',
          '/react/code-splitting-problem',
          '/react/react-conf-2018-recap',
          '/react/redux-source-code',
          '/react/react-source-code-directory',
          '/react/react-source-code-react-create-element',
          '/react/react-source-code-component',
          '/react/react-source-code-ref',
          '/react/react-source-code-context',
          '/react/react-source-code-suspense-lazy',
          '/react/react-source-code-hooks',
          '/react/react-source-code-memo-fragment-strictmode-cloneElement-create-factory',
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
          '/node/npm-packages',
          '/node/babel',
          '/node/puppeteer',
          '/node/mongoose',
          '/node/mongoose-api',
        ]
      }, {
        title: 'Database',
        children: [
          '/database/mongodb',
          '/database/mongodb-install',
          '/database/mongodb-roles',
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
          '/nginx/https',
          '/nginx/problem',
          '/nginx/virtual-host',
        ]
      }, {
        title: '理解计算机',
        children: [
          '/computer-basic/unicode',
        ]
      }, {
        title: 'Linux',
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
        title: 'webapi',
        children: [
          '/webapi/canvas',
          '/webapi/svg'
        ]
      }, {
        title: 'Other',
        children: [
          '/other/koa2',
          '/other/vuex',
          '/other/gitignore',
          '/other/interview',
        ]
      },
    ],
  },
  plugin: [
    ['@vuepress/google-analytics', {
      ga: 'UA-134511274-1'
    }],
  ]
}