# Html Builder
Learn course "JS:Prototypes"


## buildHtml.js
Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.

```
import buildHtml from './solution';

const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

buildHtml(data);

<html>
  <meta><title>hello, hexlet!</title></meta>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
```