---
title: CSSアニメーション 1 - transition
date: "2019-03-01"
excerpt: " transionを使った遷移アニメーション"
tags: [CSS]
featuredImage: featured-css-animation.png
samples:
---

# transition（トランジション） プロパティ

styleの値が変化する時にスムーズに遷移させるプロパティです。  
アニメーションの`変化する時間` や`変化の仕方（イージング）` などを指定できます。

style変化は `:hover` `:active` などの擬似クラスで指定されている要素や、JavaScriptで動的にstyleを変化させている時に起きます。

<iframe height="500" style="width: 100%;" scrolling="no" title=" transition 1" src="//codepen.io/RsakaiForEducation/embed/Rmrgag/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/Rmrgag/'> transition 1</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> #### 擬似クラスについて
>
> CSSのセレクタには `:hover` などの [擬似クラス](http://localhost:8585/css-selector/#%E6%93%AC%E4%BC%BC%E3%82%AF%E3%83%A9%E3%82%B9-)と呼ばれるキーワードがあります。  
> 例えば `.button:hover { ... }`と記述すると`.button` にユーザーのポインターが当たった時のスタイルを設定できます。  
> 【参考】 [CSS | 疑似要素・擬似クラス一覧](https://1-notes.com/css-list-of-pseudo-elements-and-pseudo-classes/)

# 指定方法

| 主なプロパティ                   |                                                                                                                                                                                        |
| :------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`transition-duration`**        | アニメーションが始まって終わるまでの時間 ＊単位は`s` (秒)<br> (例) `transition-duration: 0.4s;`                                                                                        |
| **`transition-timing-function`** | アニメーションの仕方(**イージング**)。 _\*1_<br>デフォルト値は `ease`。<br> (例) `transition-timing-function: linear;`                                                                 |
| **`transition-delay`**           | アニメーションが始まるまでの時間。指定した時間遅れてアニメーションが始まります。 <br> (例) `transition-delay: 0.6s;`                                                                   |
| **`transition-property`**        | アニメーションする対称のCSSプロパティを指定。`all` を指定すると全てのプロパティが対象となります。_\*2_ <br> (例) `transition-property: width;`                                         |
| **`transition`**                 | 上記の一括指定。`transition: [対象プロパティ] [時間] [イージング] [ディレイ]` と記述できます。＊時間以外は省略可能 <br> (例)`transition: 1s;` `transition: all 1.5s ease-in-out 0.4s;` |

> #### ＊1: イージングについて　　
>
> 指定できる主な値は以下。
>
> - `ease`＊初期値
> - `linear` ＊等速
> - `ease-in-out`
> - `cubic-bezier("値")` ＊カスタムイージング など。
>
> 【参考】  
>  [CSS EASING ANIMATION TOOL](https://matthewlein.com/tools/ceaser)  
>  [cubic-bezier.com](https://cubic-bezier.com/#0,0,1,1)

> #### ＊2: アニメーション可能なCSSプロパティ
>
> 全てのプロパティがアニメーション可能ではありません。  
> 例えば `display` プロパティはtransitionを設定してもアニメーションせず、即座に変化します。
>
> 【参考】  
>  [アニメーション可能な CSS プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_animated_properties)

---

# サンプル

## transiton-delay

<iframe height="500" style="width: 100%;" scrolling="no" title=" transition delay" src="//codepen.io/RsakaiForEducation/embed/zQrzgN/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/zQrzgN/'> transition delay</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## transition-timing-function（イージング）

<iframe height="600" style="width: 100%;" scrolling="no" title=" transition easing" src="//codepen.io/RsakaiForEducation/embed/QRyMjW/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/QRyMjW/'> transition easing</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
