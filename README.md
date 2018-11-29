# wareki2era.js

> convert Japanese Wareki(日本の元号 | 和暦) to the Era(西暦) for javascript

wareki2era.js is tiny javascript library. which is able to convert Japanese Wareki(和暦|元号) to Era (西暦).

## Installation

```bash
# npm
npm i wareki2era
# yarn
yarn add wareki2era
```

Or you can import directly via CDN.

```html
<script src="https://unpkg.com/wareki2era/dist/wareki2era.browser.js"></script>
```

## Basic Usage

### wareki2era( JapaneseEraDate ) : String

> `japaneseEraDate` shoud be `(明治|大正|昭和|平成)YYYY年MM月DD日`

**CommonJS (node.js) || ES6 or later (babel)**

```js
const wareki2era = require("wareki2era");
// import wareki2era from "wareki2era";

let jpnEra = "明治四五年一二月十日";

wareki2era(jpnEra); // 1912/12/10
```

**Web browser**

```html
<script>
var jpnEra = '昭和八年九月九日';

console.log(wareki2era(jpnEra)); // 1933/9/9

</script>
```

## With options

With second argument, you can assgin splited character whatever you want.

```js
var jpnEra = "明治四五年一二月十日";

// default
wareki2era(jpnEra); // 1912/12/10

// with option
wareki2era(jpnEra, "-"); // 1912-12-10
wareki2era(jpnEra, "#"); // 1912#12#10
```

In addition `j` option is return japanese date string of date.

```js
// with 'j' option
wareki2era(jpnEra, "j"); // 1912年12月10日
```

## Credit

Special thanks to [http://sm.2-d.jp](http://sm.2-d.jp/ktoi.js)'s liblary. `wareki2era.js` is using it while converting kan-suji(漢数字) to Arabic number.

## Licence

MIT
