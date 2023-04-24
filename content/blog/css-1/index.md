---
title: CSS基礎 1
date: "2019-01-19"
excerpt: "スタイルシートの記述方法やプロパティの種類など"
tags: ["CSS"]
featuredImage: "featured-css.png"
---

# 基本書式:

- 基本記法は `セレクタ { プロパティ: 値; }`
- `セレクタ` で**対象となる HTML の要素を指定**して、`プロパティ` でその要素がどの様なスタイル(見た目)なのかを指定します。
- 1つのセレクタに複数のプロパティを含む事ができます。

![セレクタとプロパティ](./fig.png)

# セレクタとプロパティ

## セレクタ

HTMLに記述された要素をcss上で選択する為のものです。セレクタで選択した要素にスタイルを当てる事ができます。

- セレクタは `タグ名` `class名` `ID名` など、様々な指定方法があります。
- class 名はドット`.`、ID はシャープ `#` を頭につけて指定します。

＊詳細なセレクタの説明は [CSS セレクタ](/css-selector/) を参照してください。  
＊**_本講義の演習ではclassセレクタを基本とします。_**

```css
/* タグ（要素型）セレクタ */
div {
  background-color: #ff0000;
}
/* classセレクタ */
.foo {
  background-color: #ff0000;
}
```

## プロパティと値

CSSプロパティとは、HTMLの要素に対してスタイルを適用するために使用される属性のことです。  
色、フォント、レイアウト、アニメーションなどが指定できます。  
例えば、文字色を赤にする場合は、`color: red;` というプロパティと値を使用します。

- セレクタの直後に `{ }` をつけ、その中にプロパティを指定します。
- プロパティは `プロパティ名 : 値;` という形でスタイルを指定します。

＊参考: [CSS プロパティ一覧](https://www.tagindex.com/stylesheet/properties/)

## コメント

- CSS内のコメントは `/* コメント */`　と記述します。

## classについて

CSSにはclassセレクタを基本的に使用する様にしてください。

class属性は複数の要素に同じものを記述する事ができ、見た目の共通化ができます。

```html
<!-- 同じclassを複数の要素に指定できるので、見た目の共通化ができる -->
<h2 class="title">見出し1</h2>
...
<h2 class="title">見出し2</h2>
...
<h2 class="title">見出し3</h2>
```

1つの要素にも複数指定できます。

```html
<!-- 複数のclassを指定する場合はスペース区切りで指定する -->
<div class="block main-block">
  <h2 class="title main-title">見出し</h2>
  <ul class="list">
    <li class="item item-1">リスト</li>
    <li class="item item-2">リスト</li>
    <li class="item item-3">リスト</li>
    <li class="item item-4">リスト</li>
  </ul>
</div>
```

# 記述例

```html
<!-- HTML例  -->
<body>
  <div id="container">
    <header class="site-header">
      <h2 class="site-name">サイト名</h2>
    </header>
    <div class="main-contents">
      <h3 class="page-title">ページタイトルタイトル</h3>
      <div class="page-contents">
        <p>テキストテキストテキストテキストテキスト</p>
      </div>
    </div>
  </div>
</body>
```

```css
/* --------------------
css記述例
---------------------- */
/* タグセレクタ */
body {
  background-color: #ffffff;
  color: #222222;
  padding: 0;
  margin: 0;
}
/* IDセレクタ */
#container {
  background-color: #ffdd00;
}
/* クラスセレクタ */
.site-header {
  padding: 10px 40px;
  background-color: #202020;
}
.site-name {
  color: #ffffff;
  font-size: 1.2em;
}
.main-contents {
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  background-color: #ffee33;
}
/* 子要素セレクタ */
.page-contents p {
  color: #ff0000;
}
```
