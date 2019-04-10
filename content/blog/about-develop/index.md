---
title: Web制作について
date: "2015-05-10T22:12:03.284Z"
excerpt: Web制作のフローや使用するツールなどの説明
tags: [基本]
featuredImage: featured-web.png
samples:
---

# Web 制作のフロー

完成までのおおまかな流れは以下。  
基本的に分業が多いが、一人で設計とデザイン、デザインと実装を兼業する場合や、実装だけで何人もいる場合などプロジェクトによりチームは様々。

![Web ページ](./flow.png)

# Web 制作の方法について

## 設計・デザインツール

`illustrator` , `Photoshop` などのグラフィックアプリや、 `XD` , `Sketch` ,`Figma` などの UI デザインに特化したアプリなど、用途やチーム毎に違う。  
作りたい物に合わせて選択すること。

## コーディングツール

コーディング/プログラミングは一般的に `テキストエディタ`や`IDE` を使用する。  
本授業では `Visual Studio Code`を使用するが、好きなエディタや IDE があれば自由に。

## 開発言語について

サーバーサイドでは様々な言語が使用可能(PHP,Java,Python etc.)だが  
ブラウザが理解する言語は基本的に `HTML` `CSS` `JavaScript` のみ。  
本授業では`フロントエンド言語` のみを対称とする。

### HTML

- `マークアップ言語` の一種。
- **ページの骨格**にあたるファイルで、ページの内容・構造を`タグ` を使ってブラウザが理解できるように意味付けした**文書**。
- 拡張子は`.html`

```html
<article>
  <h1 class="title">HTMLとは</h1>
  <p>HyperText Markup Language の略</p>
</article>
```

### CSS

- ”Cascading Style Sheets”の略。`スタイルシート`とも呼ばれる。
- HTML 各要素のカラー・サイズ・レイアウトなど、**装飾するため**に使用する。
- 拡張子は`.css`

```css
.title {
  color: #ff0000;
}
```

### JavaScript

- ブラウザで動作するほぼ**唯一のプログラミング言語**。 `JS`とも呼ばれる。
- ユーザーインタラクションやアニメーション、Web アプリ開発まで、様々なところで使われている。
- 拡張子は`.js`

```JS
function hello(name){
    alert('Hello, ' + name)
}
hello('Doman');
```
