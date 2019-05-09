---
title: CSS アニメーション - 1
date: "2019-03-01"
excerpt: " transionを使ったCSS アニメーション"
tags: [CSS]
featuredImage: featured-css.png
samples:
---

#transition（トランジション） プロパティ

- 要素の`変化する時間` や`変化の仕方` などを指定できる。

<iframe height="500" style="width: 100%;" scrolling="no" title=" transition 1" src="//codepen.io/RsakaiForEducation/embed/Rmrgag/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/Rmrgag/'> transition 1</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 指定方法

`transition: [対象プロパティ] [時間] [イージング] [ディレイ]` ＊時間以外は省略可能  
 (例) `transition: 1s;` `transition: all 1.5s ease-in-out 0.4s;`

|                                  |                                                                                          |
| :------------------------------- | ---------------------------------------------------------------------------------------- |
| **`transition-duration`**        | 変化が始まって終わるまでの時間＊単位は`s` <br> (例) `transition-duration: 0.4s;`         |
| **`transition-timing-function`** | 変化の仕方(**イージング**)を指定 _\*_<br> (例) `transition-timing-function: linear;`     |
| **`transition-delay`**           | 変化が始まるまでの時間(指定した時間遅れて動き始める) <br> (例) `transition-delay: 0.6s;` |
| **`transition-property`**        | 変化する対称の CSS プロパティを指定(all で全て) <br> (例) `transition-property: width;`  |

_＊_ **イージングについて**  
指定できる主な値は以下。

- `ease`＊初期値
- `linear` ＊等速
- `ease-in-out`
- `cubic-bezier("値")` ＊カスタムイージング など。

> 参考  
> [CSS EASING ANIMATION TOOL](https://matthewlein.com/tools/ceaser)  
> [cubic-bezier.com](https://cubic-bezier.com/#0,0,1,1)

---

## サンプル

### transiton-delay

<iframe height="500" style="width: 100%;" scrolling="no" title=" transition delay" src="//codepen.io/RsakaiForEducation/embed/zQrzgN/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/zQrzgN/'> transition delay</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### transition-timing-function（イージング）

<iframe height="600" style="width: 100%;" scrolling="no" title=" transition easing" src="//codepen.io/RsakaiForEducation/embed/QRyMjW/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/QRyMjW/'> transition easing</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
