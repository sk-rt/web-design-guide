---
title: Web制作について
date: '2017-05-06T23:46:37.121Z'
excerpt: 'Web制作のフローや使用するツールなどの説明'
tags: ['基本']
featuredImage: 'featured-01.png'
---

# Web 制作のフロー

完成までのおおまかな流れは以下。  
基本的に分業が多いが、一人で設計とデザイン、デザインと実装を兼業する場合や、実装だけで何人もいる場合などプロジェクトによりチームは様々。

![Web ページ](./flow.png)

# Web 制作の方法について

## Web の設計・デザインツール

`illustrator` , `Photoshop` などのグラフィックアプリや、 `XD` , `Sketch` ,`Figma` などの UI デザインに特化したアプリなどを使用する。 得意なアプリで制作すれば OK。

## Web の実装ツール

本授業ではコーディングは `テキストエディタ`で行うこととする。  
基本は `Visual Studio Code`を使用するが、好きなエディタや IDE があれば何でも良い。

## コーディングに必要な言語について

ブラウザが理解する言語は基本的に `HTML` `CSS` `JavaScript` のみ。  
このサイトでは主に HTML と CSS を対称にする。

### HTML

HyperText Markup Language の略。`マークアップ` とも呼ばれる。  
**ページの骨格**にあたるファイルで、ページの内容・構造を`タグ` を使ってブラウザが理解できるように意味付けした**文書**。

```html
<article>
  <h1 class="title">HTMLとは</h1>
  <p>HyperText Markup Language の略</p>
</article>
```

### CSS

”Cascading Style Sheets”の略。`スタイルシート`とも呼ばれる。  
HTML の各タグのカラー・サイズ・レイアウトなど、ページを**装飾するため**に使用する。

```css
.title {
  color: #ff0000;
}
```

### JavaScript

ブラウザで動作する現状ほぼ唯一のプログラミング言語。 `JS`とも呼ばれる。  
ユーザーインタラクションや、WEB アプリの基幹部分まで、HTML・CSS でカバーできないところで使われている。

```JS
function hello(name){
    alert(`Hello`+ name)
}
hello("Doman");
```
