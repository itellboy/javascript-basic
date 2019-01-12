# css 选择器

## 概览

| selector             | demo                  | desc                                         | version |
| -------------------- | --------------------- | -------------------------------------------- | ------- |
| .class               | .intro                | 选择 class = "intro" 的所有元素              | 1       |
| #id                  | #intro                | 选择 id = "intro" 的所有元素                 | 1       |
| *                    | *                     | 选择所有元素                                 | 2       |
| element              | p                     | 选择所有 p 元素                              | 1       |
| element,element      | div, p                | 所有 div 和 所有 p 元素                      | 1       |
| elemnt element       | div p                 | 所有 div 内部所有的 p 元素                   | 1       |
| element>element      | div>p                 | 所有父元素为 div 元素的 p 元素               | 2       |
| element+element      | div+p                 | 紧接在 div 元素之后的所有 p 元素             | 2       |
| [attribute]          | [target]              | 带有 target 属性的所有元素                   | 2       |
| [attribute=value]    | [target=_blank]       | 选择 target="_blank" 的元素                  | 2       |
| [attribute~=value]   | [title~=flower]       | 选择 title 属性包含 flower 的元素            | 2       |
| :link                | a:link                | 所有未被访问的链接                           | 1       |
| :visited             | a:visited             | 所有已被访问的链接                           | 1       |
| :active              | a: active             | 所有活动的链接                               | 1       |
| :hover               | a:hover               | 选择鼠标指针位于其上的链接                   | 1       |
| :focus               | input:focus           | 选择获得焦点的 input 元素                    | 2       |
| :first-letter        | p:first-letter        | 选择每个 p 的首字母                          | 1       |
| :first-line          | p:first-line          | 选择每个 p 的首行                            | 1       |
| :first-child         | p:first-child         | 选择属于父元素的第一个元素的所有 p 元素      | 2       |
| :before              | p:before              | 在每个 p 前面插入内容                        | 2       |
| :after               | p:after               | 在每个 p 后面插入内容                        | 2       |
| :lang(language)      | p:lang(it)            | 选择有以 it 开头的 lang 属性值的每个 p 元素  | 2       |
| element1~element2    | p~ul                  | 选择前面有 p 的每个 ul 元素                  | 3       |
| [attribute^=value]   | a[src^="https"]       | 选择其 src 属性以 https 开头的 a 元素        | 3       |
| [attribute\$=value]  | a[src\$=".png"]       | 选择其 src 属性以 .png 结尾的 a 元素         | 3       |
| [attribute*=value]   | a[src*=".abc"]        | 选择其 src 属性含有 .abc 子串的 a 元素       | 3       |
| :first-of-type       | p:first-of-type       | 选择属于其父元素的第一个 p 元素              | 3       |
| :last-of-type        | p:last-of-type        | 选择属于其父元素的最后一个 p 元素            | 3       |
| :only-of-type        | p:only-of-type        | 选择属于其父元素唯一的 p 元素的所有 p 元素   | 3       |
| :only-child          | p:only-child          | 选择属于其父元素唯一子元素的每个 p 元素      | 3       |
| :nth-child(n)        | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 p 元素  | 3       |
| :nth-last-child(n)   | p:nth-last-child(2)   | 选择属于其父元素倒数第 2 个元素的所有 p 元素 | 3       |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择属于其父元素第 2 个 p 元素               | 3       |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 选择输入其父元素倒数第 2 个 p 元素           | 3       |
| :last-child          | p:last-child          | 选择属于其父元素最后一个元素的所有 p 元素    | 3       |
| :root                | :root                 | 选择文档的根元素                             | 3       |
| :empty               | p:empty               | 选择没有子元素的 p 元素                      | 3       |
| :target              | #news:target          | 选择当前活动的 #news 元素                    | 3       |
| :enabled             | input:enabled         | 选择每个启用的 input 元素                    | 3       |
| :disabled            | input:disabled        | 选择每个禁用的 input 元素                    | 3       |
| :checked             | input:checked         | 选择每个被选中的 input 元素                  | 3       |
| :not(selector)       | :not(p)               | 选择非 p 的每个元素                          | 3       |
| ::selection          | ::selection           | 选择被用户选取的元素部分                     | 3       |

## point

* :nth-child(1) == :first-child
* :nth-last-child == :last-child