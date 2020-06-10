module.exports = {
  base: '/javascript-basic/',
  title: 'JavaScript Basic',
  description: 'Love what you do, do what you love. :)',
  head: [
    ['link', { rel: 'icon', href: '/svg/js-cube.svg', }],
  ],
  host: '0.0.0.0',
  port: '8080',
  cache: true,
  extraWatchFiles: [],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/back-to-top', [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-161940276-2'
      }
    ]
  ],
  configureWebpack: (config, isServer) => { },
  evergreen: true,
  themeConfig: {
    repo: 'itellboy/javascript-basic',
    lastUpdated: '最后更新',
    sidebarDepth: 2,
    logo: '/svg/js-cube.svg',
    nav: [
      {
        text: '友情链接',
        items: [
          {
            text: 'Collection',
            link: 'https://itellboy.github.io/collection',
          }
        ],
      }
    ],
    sidebar: [
      ['/welcome', 'welcome'],
      {
        title: '标准内建对象',
        children: [
          {
            title: '值属性',
            children: [
              '/built-in-objects/value-properties/infinity',
              '/built-in-objects/value-properties/nan',
              '/built-in-objects/value-properties/undefined',
              '/built-in-objects/value-properties/null',
              '/built-in-objects/value-properties/global-this',
            ],
          },
          {
            title: '函数属性',
            children: [
              '/built-in-objects/function-properties/eval',
              '/built-in-objects/function-properties/uneval',
              '/built-in-objects/function-properties/is-finite',
              '/built-in-objects/function-properties/is-nan',
              '/built-in-objects/function-properties/parse-float',
              '/built-in-objects/function-properties/parse-int',
              '/built-in-objects/function-properties/decode-uri',
              '/built-in-objects/function-properties/decode-uri-component',
              '/built-in-objects/function-properties/encode-uri',
              '/built-in-objects/function-properties/encode-uri-component',
              '/built-in-objects/function-properties/escape',
              '/built-in-objects/function-properties/unescape',
            ],
          },
          {
            title: '基础对象',
            children: [
              '/built-in-objects/fundamental-objects/object',
              '/built-in-objects/fundamental-objects/function',
              '/built-in-objects/fundamental-objects/boolean',
              '/built-in-objects/fundamental-objects/symbol',
            ],
          },
          {
            title: '异常对象',
            children: [
              '/built-in-objects/error-objects/error',
              '/built-in-objects/error-objects/aggregate-error',
              '/built-in-objects/error-objects/eval-error',
              '/built-in-objects/error-objects/range-error',
              '/built-in-objects/error-objects/reference-error',
              '/built-in-objects/error-objects/syntax-error',
              '/built-in-objects/error-objects/type-error',
              '/built-in-objects/error-objects/uri-error',
            ],
          },
          {
            title: '数值和日期',
            children: [
              '/built-in-objects/numbers-dates/number',
              '/built-in-objects/numbers-dates/big-int',
              '/built-in-objects/numbers-dates/math',
              '/built-in-objects/numbers-dates/date',
            ],
          },
          {
            title: '文本处理',
            children: [
              '/built-in-objects/text-processing/string',
              '/built-in-objects/text-processing/reg-exp',
            ],
          },
          {
            title: '有序集合',
            children: [
              '/built-in-objects/indexed-collections/array',
              '/built-in-objects/indexed-collections/int-8-array',
              '/built-in-objects/indexed-collections/uint-8-array',
              '/built-in-objects/indexed-collections/uint-8-clamped-array',
              '/built-in-objects/indexed-collections/int-16-array',
              '/built-in-objects/indexed-collections/uint-16-array',
              '/built-in-objects/indexed-collections/int-32-array',
              '/built-in-objects/indexed-collections/uint-32-array',
              '/built-in-objects/indexed-collections/float-32-array',
              '/built-in-objects/indexed-collections/float-64-array',
              '/built-in-objects/indexed-collections/big-int-64-array',
              '/built-in-objects/indexed-collections/big-uint-64-array',
            ],
          },
          {
            title: '键值集合',
            children: [
              '/built-in-objects/keyed-collections/map',
              '/built-in-objects/keyed-collections/set',
              '/built-in-objects/keyed-collections/weak-map',
              '/built-in-objects/keyed-collections/weak-set',
            ],
          },
          {
            title: '结构化数据',
            children: [
              '/built-in-objects/structured-data/array-buffer',
              '/built-in-objects/structured-data/shared-array-buffer',
              '/built-in-objects/structured-data/atomics',
              '/built-in-objects/structured-data/data-view',
              '/built-in-objects/structured-data/json',
            ],
          },
          {
            title: '控制抽象',
            children: [
              '/built-in-objects/control-abstraction/promise',
              '/built-in-objects/control-abstraction/generator',
              '/built-in-objects/control-abstraction/generator-function',
              '/built-in-objects/control-abstraction/async-function',
            ],
          },
          {
            title: '反射',
            children: [
              '/built-in-objects/reflection/reflect',
              '/built-in-objects/reflection/proxy',
            ],
          },
          {
            title: '国际化',
            children: [
              '/built-in-objects/i18n/intl',
              '/built-in-objects/i18n/intl-collator',
              '/built-in-objects/i18n/intl-date-time-format',
              '/built-in-objects/i18n/intl-list-format',
              '/built-in-objects/i18n/intl-number-format',
              '/built-in-objects/i18n/intl-plural-rules',
              '/built-in-objects/i18n/intl-relative-time-format',
              '/built-in-objects/i18n/intl-locale',
            ],
          },
          {
            title: 'WebAssembly',
            children: [
              '/built-in-objects/web-assembly/web-assembly',
              '/built-in-objects/web-assembly/web-assembly-module',
              '/built-in-objects/web-assembly/web-assembly-instance',
              '/built-in-objects/web-assembly/web-assembly-memory',
              '/built-in-objects/web-assembly/web-assembly-table',
              '/built-in-objects/web-assembly/web-assembly-compile-error',
              '/built-in-objects/web-assembly/web-assembly-link-error',
              '/built-in-objects/web-assembly/web-assembly-runtime-error',
            ],
          },
        ],
      }, {
        title: '语句',
        children: [
          {
            title: '控制流',
            children: [
              '/statements/block',
              '/statements/break',
              '/statements/continue',
              '/statements/empty',
              '/statements/if-else',
              '/statements/switch',
              '/statements/throw',
              '/statements/try-catch',
            ],
          },
          {
            title: '语句声明',
            children: [
              '/statements/var',
              '/statements/let',
              '/statements/const',
            ],
          },
          {
            title: '函数与类',
            children: [
              '/statements/function',
              '/statements/function*',
              '/statements/async-function',
              '/statements/return',
              '/statements/class',
            ],
          },
          {
            title: '循环迭代',
            children: [
              '/statements/do-while',
              '/statements/for',
              '/statements/for-each-in',
              '/statements/for-in',
              '/statements/for-of',
              '/statements/for-await-of',
              '/statements/while',
            ],
          },
          {
            title: '其他',
            children: [
              '/statements/debugger',
              '/statements/export',
              '/statements/import',
              '/statements/import.meta',
              '/statements/label',
              '/statements/with',
            ],
          },
        ],
      }, {
        title: '表达式和操作符',
        children: [
          {
            title: '基本表达式',
            children: [
              '/expressions-operators/this',
              '/expressions-operators/function',
              '/expressions-operators/function*',
              '/expressions-operators/class',
              '/expressions-operators/yield',
              '/expressions-operators/yield*',
              '/expressions-operators/async-function',
              '/expressions-operators/await',
              '/expressions-operators/array-init',
              '/expressions-operators/object-init',
              ['/built-in-objects/text-processing/reg-exp', '/ab+c/i'],
              '/expressions-operators/grouping',
            ],
          },
          {
            title: '左结合表达式',
            children: [
              '/expressions-operators/property-accessors',
              '/expressions-operators/new',
              '/expressions-operators/new-target',
              '/expressions-operators/spread-syntax',
              '/expressions-operators/super',
            ],
          },
          {
            title: '自增自减',
            children: [
              ['/expressions-operators/arithmatic-operators', 'A++'],
              ['/expressions-operators/arithmatic-operators', 'A--'],
              ['/expressions-operators/arithmatic-operators', '++A'],
              ['/expressions-operators/arithmatic-operators', '--A'],
            ],
          },
          {
            title: '一元操作符',
            children: [
              '/expressions-operators/delete',
              '/expressions-operators/void',
              '/expressions-operators/typeof',
              ['/expressions-operators/bitwise-operators', '+'],
              ['/expressions-operators/bitwise-operators', '-'],
              ['/expressions-operators/logical-operators', '~'],
              ['/expressions-operators/logical-operators', '!'],
            ],
          },
          {
            title: '算数运算符',
            children: [
              ['/expressions-operators/arithmatic-operators', '+'],
              ['/expressions-operators/arithmatic-operators', '-'],
              ['/expressions-operators/arithmatic-operators', '*'],
              ['/expressions-operators/arithmatic-operators', '/'],
              ['/expressions-operators/arithmatic-operators', '%'],
              ['/expressions-operators/arithmatic-operators', '**'],
            ],
          },
          {
            title: '关系运算符',
            children: [

              '/expressions-operators/in',
              '/expressions-operators/instanceof',
              ['/expressions-operators/comparison-operators', '>'],
              ['/expressions-operators/comparison-operators', '<'],
              ['/expressions-operators/comparison-operators', '>='],
              ['/expressions-operators/comparison-operators', '<='],

            ],
          },
          {
            title: '相等运算符',
            children: [
              ['/expressions-operators/comparison-operators', '=='],
              ['/expressions-operators/comparison-operators', '!='],
              ['/expressions-operators/comparison-operators', '==='],
              ['/expressions-operators/comparison-operators', '!=='],
            ],
          },
          {
            title: '位移运算符',
            children: [
              ['/expressions-operators/bitwise-operators', '<<'],
              ['/expressions-operators/bitwise-operators', '>>'],
              ['/expressions-operators/bitwise-operators', '>>>'],

            ],
          },
          {
            title: '二进制位运算符',
            children: [
              ['/expressions-operators/bitwise-operators', '&'],
              ['/expressions-operators/bitwise-operators', '|'],
              ['/expressions-operators/bitwise-operators', '^'],

            ],
          },
          {
            title: '二进制逻辑运算符',
            children: [
              ['/expressions-operators/logical-operators', '&&'],
              ['/expressions-operators/logical-operators', '||'],
            ],
          },
          {
            title: '三元表达式',
            children: [
              ['/expressions-operators/conditional-operators', '(condition ? ifTrue : ifFalse)'],
            ],
          },
          {
            title: '赋值运算符',
            children: [
              ['/expressions-operators/assignment-operators', '='],
              ['/expressions-operators/assignment-operators', '*='],
              ['/expressions-operators/assignment-operators', '/='],
              ['/expressions-operators/assignment-operators', '%='],
              ['/expressions-operators/assignment-operators', '+='],
              ['/expressions-operators/assignment-operators', '-='],
              ['/expressions-operators/assignment-operators', '<<='],
              ['/expressions-operators/assignment-operators', '>>='],
              ['/expressions-operators/assignment-operators', '>>>='],
              ['/expressions-operators/assignment-operators', '&='],
              ['/expressions-operators/assignment-operators', '^='],
              ['/expressions-operators/assignment-operators', '|='],
              ['/expressions-operators/destructuring-operators', '[a, b] = [1, 2]'],
              ['/expressions-operators/destructuring-operators', '{a, b} = {a:1, b:2}'],

            ],
          },
        ],
      }, {
        title: '函数',
        children: [
          '/functions/arrow-functions',
          '/functions/default-parameters',
          '/functions/method-definitions',
          '/functions/rest-parameters',
          '/functions/arguments',
          '/functions/getter',
          '/functions/setter',
        ],
      }, {
        title: 'TypeScript',
        children: [
          '/typescript/basic-types',
          '/typescript/interfaces',
          '/typescript/functions',
          '/typescript/generics',
        ],
      }, {
        title: '其他',
        children: [
          '/other/style',
          '/other/interview',
        ],
      }
    ],
  },
}