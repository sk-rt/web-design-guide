---
title: CSSセレクタ
date: "2019-01-29"
excerpt: "スタイルする対象の要素を指定する、セレクタについて"
tags: [CSS]
featuredImage: featured-css.png
samples: []
---

# セレクタとは

スタイルを適用する対象の要素を指定する記法です。  
擬似クラスなども含めると[多様な記述](http://www.htmq.com/csskihon/005.shtml)が可能です。  
以下に代表的なものを紹介します。

## 要素型セレクタ

`要素名`
HTML要素名で対象を指定します。  
この指定をすると、ページ内の対象のタグ全てに適用されます。

```css
/*<body>要素 */
body {
  color: #f00;
}
/* 全ての<div>要素 */
div {
  color: #f00;
}
```

## classセレクタ `.`

あるclassが指定されている要素を`.クラス名`指定します。  
同じclass名が指定されている要素全てに適用されます。

```css
/* <tag class="foo"> の要素 */
.foo {
  color: #f00;
}
```

## id セレクタ `#`

ある id が指定されている要素を`＃クラス名`指定します。  
＊同名のidは**1つのHTML内に1度しか使用不可**なので注意してください。

```css
/* <tag id="bar"> の要素 */
#bar {
  color: #f00;
}
```

## 子孫セレクタ `A B`

セレクタを**半角スペース**で区切ると、ある要素の子孫要素を指定できます。

```css
/* classが"foo"の要素の中にある、div要素
  <div class="foo">
    <div>この要素</div>
  </div>
*/
.test div {
  color: #f00;
}
/* classが"foo"の要素の中にある、classが"bar"の要素
  <div class="foo">
    <div class="bar">この要素</div>
  </div>
 */
.hoge .bar {
  color: #f00;
}
```

## 複数セレクタ `AB`

セレクタをスペースなしで複数記入すると、`セレクタA かつ セレクタB の要素`となります。  
＊要素型セレクタは必ず一番前に記述が必要です。

```css
/* classが"test"のdiv要素 
  <div class="foo"> */
div.foo {
  color: #f00;
}
/* "foo"と"bar"がclassに指定されている要素
  <div class="foo bar"> */
.foo.bar {
  color: #f00;
}
```

## 擬似クラス `:`

特定の状態など、単体セレクタでは表現できないものを選択できます。
主に他のセレクタの後に指定します。 `セレクタ:擬似クラス名`

#### `:hover` マウスカーソルが乗っている要素

<small>＊スマホなどのタッチデバイスでは使用できません。</small>

```css
.test:hover {
  color: #f00;
}
```

#### `:active` クリック中の要素

```css
.test:active {
  color: #f00;
}
```

#### `:nth-child(n)` n番目の兄弟要素

`n` には数値や `odd`（奇数） `even` （偶数）などのキーワード、 `4n` `5n-1` などの式も指定できます。  
【参考】 [:nth-child()](https://developer.mozilla.org/ja/docs/Web/CSS/:nth-child)

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```css
/* 3番目のli要素 */
.list li:nth-child(3) {
  color: #f00;
}
/* 奇数番目のli要素 */
.list li:nth-child(odd) {
  color: #00f;
}
/* 偶数番目のli要素 */
.list li:nth-child(even) {
  color: #0f0;
}
```

---

> **参考**
>
> - [CSS のセレクタとは？覚えておきたい 25 種類と書き方](https://saruwakakun.com/html-css/reference/selector)
> - [CSS セレクタのチートシート](https://webliker.info/css-selector-cheat-sheet/)
> - [CSS selectors cheatsheet](https://frontend30.com/css-selectors-cheatsheet/)

# 詳細度

セレクタには詳細度という概念があり、詳細度が高いほどそのスタイルが*優先されます*。  
＊詳細度が同じ場合は後に記述した方が優先されます。

大まかな詳細度は以下の数字を足すと計算できます。（＊[実際は少し違います](https://qiita.com/izumin5210/items/8ae78cb4f4bd325bccb4#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E5%8B%98%E9%81%95%E3%81%84)）

- **ID セレクタ(#)** → `100点`
- **Class セレクタ(.)** → `10点`
- **要素型セレクタ** → `1点`

### 例 1

```html
<div id="foo" class="bar">何色？</div>
```

```css
/* 詳細度: 1点 */
div {
  color: blue;
}
/* 詳細度: 100点 */
#foo {
  color: red; /* ⬅︎ この色 */
}
/* 詳細度: 10点 */
.bar {
  color: green;
}
```

### 例 2

```html
<div class="foo">
  <div class="bar">何色？</div>
</div>
```

```css
/* 詳細度: 10点 */
.bar {
  color: blue;
}
/* 詳細度: 11点 */
div.bar {
  color: green;
}
/* 詳細度: 20点 */
.foo .bar {
  color: red;
}
/* 詳細度: 21点 */
.foo div.bar {
  color: orange; /* ⬅︎ この色 */
}
```

---

> **参考**
>
> - [エンジニアはもう一度 CSS とちゃんと向き合ってみよう - 詳細度編](https://qiita.com/izumin5210/items/8ae78cb4f4bd325bccb4)
