module.exports = {
  base: '/',
  title: 'Docs',
  description: 'Love what you do, do what you love. :)',
  head: [
    ['link', { ref: 'icon', href: '/images/logo.png' }],
  ],
  host: '0.0.0.0',
  port: '8080',
  dest: 'docs/.vuepress/dist',
  cache: true,
  extraWatchFiles: [],
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: (config, isServer) => { },
  evergreen: true,
}