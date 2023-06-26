---
title: CSSアニメーション 3 - animation
date: "2019-03-05"
excerpt: " 高度なキーフレームアニメーション"
tags: [CSS]
featuredImage: featured-css-animation.png
samples:
---

# CSSでのキーフレームアニメーション

`animation` プロパティと `@keyframes` を使って CSS のみで[キーフレームアニメーション](https://entry.cgworld.jp/terms/%E3%82%AD%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.html)を作成できます。  
transitionと違いアニメーションのタイミングを自由に指定でき、キーフレームを利用してより詳細にアニメーションを制御することができます。

<iframe height="500" style="width: 100%;" scrolling="no" title="keyfrme animation" src="//codepen.io/RsakaiForEducation/embed/MdpPeR/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/MdpPeR/'>keyfrme animation</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# animationプロパティ

| 主なプロパティ                  |                                                                                                                                                                                                                                                                        |
| :------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`animation-name`**            | `@keyframes`で指定したアニメーションの名前。<br>(例)`animation-name: my-animation`                                                                                                                                                                                     |
| **`animation-duration`**        | **長さ**。 スタートしてから終わるまでの時間。 <br>(例)`animation-duration: 0.5s`                                                                                                                                                                                       |
| **`animation-delay`**           | **開始時間**。始まるまでの時間。 <br>(例)`animation-delay: 1.4s`                                                                                                                                                                                                       |
| **`animation-iteration-count`** | **繰り返し回数**。`infinite`で無限回 <br>(例)`animation-iteration-count: 4`                                                                                                                                                                                            |
| **`animation-timing-function`** | **イージング**。変化の仕方。 <br>(例)`animation-timing-function: ease-in-out`                                                                                                                                                                                          |
| **`animation-direction`**       | **再生方向**。`normal` で常に一定方向に変化します。`alternate` で奇数回は逆方向に変化します。 <br>(例)`animation-direction: alternate`                                                                                                                                 |
| **`animation-fill-mode`**       | **再生の前後の状態**。`none` だと設定なし。`forwards` は最後のフレームを、`backwards`は最初のフレームを保持。`both`は両方を保持。 <br>(例)`animation-fill-mode` <br> ＊詳細は [animation-fill-mode](https://developer.mozilla.org/ja/docs/Web/CSS/animation-fill-mode) |

＊`animation: [name] [duration] [timing-function] [delay] [count] [direction] [fill-mode]` と一括指定することもできます。

# keyframesの指定

`@keyframes` はCSSの[アットルール](https://developer.mozilla.org/ja/docs/Web/CSS/At-rule)と呼ばれる記法です。

`@keyframes キーフレーム名 { ... }` に 0％〜100％の間の任意の位置のstyleを指定します。  
＊キーフレーム名はの任意の名前を指定してください。(ただし半角英数字を使用してください)

`0%〜100%` はアニメーションが始まってから終わるまでの時間をパーセントで割ったものです。  
例えば、2秒のアニメーションに、50%のキーフレームを追加した場合はアニメーションが始まってから1秒後のstyleを指定する事が出来ます。

```css
@keyframes my-keyframes {
  0% {
    transform: rotate(0deg);
    background-color: #ff0000;
  }
  100% {
    transform: rotate(360deg);
    background-color: #0000ff;
  }
}
```

## サンプル

<iframe height="400" style="width: 100%;" scrolling="no" title="keyfrme animation 3" src="//codepen.io/RsakaiForEducation/embed/KLWrpw/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/KLWrpw/'>keyfrme animation 3</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

> **animation 参考**  
> [【CSS3】@keyframes と animation 関連のまとめ](https://qiita.com/7968/items/1d999354e00db53bcbd8)  
> [使える！CSS アニメーション 20 選](https://lab.sonicmoov.com/markup/css/css-animation-20/)  
> [Pure CSS Emoji](https://codepen.io/pbutcher/pen/wMxwbr)
