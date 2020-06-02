---
title: ボックスモデル
date: "2019-01-31"
excerpt: 要素のサイズや余白などの指定
tags: [CSS]
featuredImage: featured-css.png
samples: [{ file: "css/box-model.zip", title: "ボックスモデル演習" }]
---

# ボックスモデルとは

すべての要素は、**ボックス**と呼ばれる四角形の領域を持っていて、ボックスは以下のスタイルで決定する。

- 要素の幅・高さ `width` / `height`
- 内側の余白 `padding`
- 枠線 `border`
- 外側の余白 `margin`

![ボックス](./box-model.png)

# ボックスモデルを構成するプロパティ

## width / height (幅 / 高さ)

- 要素の幅・高さを指定する。デフォルト値は`auto`。
- ブロック要素のみ。インライン要素には指定できない。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素のサイズ**が基準）
- 指定がない場合(auto)、**`width` は親要素の内側一杯に広がり、`height` は要素の中身の高さ**になる。  
  （`<div></div>`の様に中身が何も入ってないタグの場合は height は 0 になり、表示されない。）

```css
.my-box {
  width: 50%;
  height: 200px;
}
```

## margin (外側の余白)

- 要素同士のスキマ（外側の余白）を上下左右指定する。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素の幅**が基準）
- **左右に `auto` を指定すると要素を中央にできる。**
- `margin-top` `margin-right` `margin-bottom` `margin-left` で上下左右を個別に設定できる。
- マイナスの値を指定することも可能。
- 上下（垂直）の要素同士のマージンには[マージンの相殺](https://coliss.com/articles/build-websites/operation/css/about-collapsing-margins.html)が起こるので注意。

#### 値の指定方法

- 値を 1 つ指定 → `margin: 10px` **[上下左右]すべて**に 10px マージンを指定。
- 値を 2 つ指定 → `margin: 10px 20px`記述した順に **[上下]** **[左右]** のマージンになる。
- 値を 3 つ指定 → `margin: 10px 20px 10px`記述した順に **[上]** **[左右]** **[下]** のマージンになる。
- 値を 4 つ指定 → `margin: 10px 5px 0px 8px`記述した順に **[上][右][下][左]** のマージンになる。

```css
.my-box {
  margin: 10px auto;
}
/* 以下も `10px auto` と同じ意味 */
.my-box {
  margin: 10px auto 10px auto;
}
/* 以下の様にプロパティを分けて書くこともできる */
.my-box {
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
}
```

## padding (内側の余白)

- 要素の内側の余白を上下左右指定する。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素の幅**が基準）
- margin と同じく`padding-top` `padding-right` `padding-bottom` `padding-left` で上下左右を個別に設定できる。
- 値の指定方法は margin と同じ。（ただしマイナスの値や `auto` は不可）

## border （枠線）

- 要素の枠線を上下左右指定する。
- 指定方法は `太さ 線スタイル 色`。＊順番は指定なし。
- 線スタイルには `solid`(1 本線),`dashed`(破線),`dotted`(点線)などがある。
- `border-top` `border-right` `border-bottom` `border-left` で上下左右を個別に設定できる。

> 参考: [border - CSS](https://developer.mozilla.org/ja/docs/Web/CSS/border)

```css
.my-box {
  border: 6px dashed #f00;
}
```

# ボックスモデルの例

<iframe height="600" style="width: 100%;" scrolling="no" title="Box Model" src="//codepen.io/RsakaiForEducation/embed/MRpbqP/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/MRpbqP/'>Box Model</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
