---
title: HTML基礎 2
date: "2015-06-02T22:40:32.169Z"
excerpt: "ブロックレベル要素とインライン要素やタグの種類"
tags: ["HTML"]
featuredImage: "featured-html.png"
---

# ブロックレベル要素とインライン要素

HTML タグは大きく`ブロックレベル要素`と`インライン要素`に分類できる。

## ブロックレベル要素

セクション、見出しや段落、リストなど文書の基本要素となるもの。  
css で指定しない限り**横幅一杯に表示**される。  
`<div>` `<h1>` `<p>` `<ul>` `<li>` など

##インライン要素
主に文書に役割を持たせるもの。内容の幅で表示される。  
インライン要素の中には**ブロックレベル要素を入れることができない**。  
`<span>` `<a>` `<strong>` `<img>` など

---

#### サンプル

<iframe height="500" style="width: 100%;" scrolling="no" title="Block and Inline Tag" src="//codepen.io/RsakaiForEducation/embed/pBRJpx/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/pBRJpx/'>Block and Inline Tag</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# 基本的なタグ

|                  |                                                                                                                                     |
| :--------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`<div>`**      | <small>`ブロック`</small> <br>特に意味のない汎用のブロックレベル要素。 スタイルの為に要素をグループ化するの使う。                   |
| **`<h1>〜<h6>`** | <small>`ブロック`</small> <br>見出しを指定する。大きな（重要な）見出しの順に`<h1>`から`<h6>`を使う。                                |
| **`<p>`**        | <small>`ブロック`</small> <br>文章の段落を指定する。（文章に使用する）                                                              |
| **`<header>`**   | <small>`ブロック`</small> <br>文書全体の最初にタイトルやナビなどを配置する。                                                        |
| **`<footer>`**   | <small>`ブロック`</small> <br>文書全体の最後にタイトルやナビなどを配置する。                                                        |
| **`<ul>,<ol>`**  | <small>`ブロック`</small> <br>リストを表示する。 `<ul>`は順序のないリスト、`<ol>`は順序のあるリスト。直下にに必ず`<li>`が含まれる。 |
| **`<table>`**    | <small>`ブロック`</small> <br>表（テーブル）を作成する際に使用する。                                                                |
| **`<span>`**     | <small>`ブロック`</small> <br>特に意味のない汎用のインライン要素。 スタイルの為に要素をグループ化するの使う。                       |
| **`<a>`**        | <small>`インライン or ブロック`</small> <br>リンクを指定する。※例外的に中にブロック要素を含めることができる。                       |
| **`<img>`**      | <small>`インライン | 空要素`</small> <br>画像を表示する。                                                                           |
| **`<br>`**       | <small>`インライン | 空要素`</small> <br>文書を改行する。                                                                           |

> その他のタグなど、詳しくは以下などのサイトを参照
>
> - [ HTML5 リファレンス](http://www.htmq.com/html5/){target="\_blank"}
> - [ HTML5 要素一覧 TAG index](http://www.tagindex.com/html5/elements/){target="\_blank"}

# インデント・コメント

HTML はインデント（行頭を下げる）やコメントで注釈をいれて見やすく記述すること。  
階層構造を見やすくすることで間違いが少なくなり、間違いがあっても見つけやすい。  
エディタでは行を選択して`→ タブ` を押すと 1 つインデントが下がる。

## （例）インデント・コメントなし

<!-- prettier-ignore -->
```html
<body>
<div class="container">
<div class="wrapper">
<div class="content-main">
<h2>タイトル</h2>
<ul>
<li><a href="">リンク</a></li>
<li><a href="">リンク</a></li>
<li><a href="">リンク</a></li>
</ul>
</div>
<div class="content-sub">
<h3>サブタイトル</h3>
<p>テキストテキストテキストテキスト</p>
</div>
</div>
</div>
</body>
```

## （例）インデント・コメントあり

```html
<body>
  <div class="container">
    <div class="wrapper">
      <!-- ↓↓　メインコンテンツ -->
      <div class="content-main">
        <h2>タイトル</h2>
        <ul>
          <li><a href="">リンク</a></li>
          <li><a href="">リンク</a></li>
          <li><a href="">リンク</a></li>
        </ul>
      </div>
      <!-- ↑↑　メインコンテンツ -->
      <!-- ↓↓　サブコンテンツ -->
      <div class="content-sub">
        <h3>サブタイトル</h3>
        <p>テキストテキストテキストテキスト</p>
      </div>
      <!-- ↑↑　サブコンテンツ -->
    </div>
  </div>
</body>
```