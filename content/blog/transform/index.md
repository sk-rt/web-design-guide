---
title: 変形 - transform
date: "2019-03-02"
excerpt: " transformを使った要素の変形"
tags: [CSS]
featuredImage: featured-css.png
samples:
---

#transform プロパティ

transform は要素を変形させるプロパティ。  
変形には`移動` `回転` `伸縮` `傾斜` がある。

## 指定方法

```css
transform: translate(40px, 10px);
transform: translate(50%, -20%) rotate(250deg); /*（複数の場合は半角スペース空き）*/
```

|                      |                                                                               |
| -------------------- | ----------------------------------------------------------------------------- |
| **`translate(X,Y)`** | **移動**( `X,Y` に移動する値を指定) <br>(例)`transition: translate(10px,0px)` |
| **`rotate(deg)`**    | **回転**( 単位は`deg`＊角度) <br>(例)`transition: rotate(180deg)`             |
| **`scale(X,Y)`**     | **伸縮**( 1 を基準にした伸縮度を指定) <br>(例)`transition: scale(2,1.5)`      |
| **`skew(X,Y)`**      | **傾斜(歪み)** ( 単位は`deg`＊角度)<br>(例)`transition: skew(10deg,20deg)`    |

## サンプル

<iframe height="550" style="width: 100%;" scrolling="no" title="transform" src="//codepen.io/RsakaiForEducation/embed/RmrZOX/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/RmrZOX/'>transform</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 組み合わせ

<iframe height="400" style="width: 100%;" scrolling="no" title="transform mix" src="//codepen.io/RsakaiForEducation/embed/WBrZGO/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/WBrZGO/'>transform mix</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
