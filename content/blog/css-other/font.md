---
title: フォント
date: "2019-04-09"
excerpt: "フォントの指定方法やシステムフォント・Webフォントの違いについて"
tags: [CSS]
featuredImage: featured-css.png
samples: []
---

<!--
Webサイトでのタイポグラフィー表現は、OSごとの差異やパフォーマンスなどの観点から、自由度が高いとは言えない状況です。
ただし、ブラウザの進化やネットワークの高速化で徐々に改善しつつあります。

また、フォントには大きく分けてシステムフォントとWebフォントがあり、それぞれにメリット・デメリットがあります。 -->

# fontプロパティ

## font-family

Webページで表示されるフォントを指定するにはCSSの `font-family` プロパティを使います。  
値にはフォント名をカンマ区切りで列挙する形で指定し、前に書いたフォントが優先的に表示されます。  
フォント名には基本は `""` で囲う様にします。（英字のみでスペースが入らない場合は必須ではありません）

```css
body {
  /* ↓ ヒラギノ角ゴシックが無ければメイリオが、メイリオも無ければ sans-serif（標準のゴシック体）が表示される */
  font-family: "Hiragino Sans", Meiryo, sans-serif;
}
```

参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-family

### 総称ファミリー

font-family には総称フォントファミリー（フォントカテゴリ）を最後に指定する様にしてください。  
指定したフォントが全て無い場合はこのフォントが使用されます。

- `sans-serif` サンセリフ体（ゴシック体）
- `serif` セリフ体（明朝体）

など

## font-weight

フォントの太さ（ウェイト）は `font-weight` プロパティを使います。  
`normal` `bold` 等のキーワードか、`100`〜`900` までの数値で指定できます。

```css
.body-text {
  font-weight: normal;
}
.title {
  /* 600がbold相当 */
  font-weight: 600;
}
```

参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-weight

## 英字混色

上記の通り、前に書いたものを優先に表示するので、英字フォントの指定を先にする事で、文章内の英字・数字は `Helvetica Neue`、日本語は `ヒラギノ角ゴシック` という混色も可能です。

```css
body {
  /* ↓ 英字は Helvetica Neue(macOS/iOS) か Arial(Windows)
       日本語は ヒラギノ角ゴシックかメイリオ、全て無ければsans-serif（標準のゴシック体）が表示される
  */
  font-family: "Helvetica Neue", Arial, "Hiragino Sans", Meiryo, sans-serif;
}
```

## OpenType機能

[OpenType フォント](https://mp-support.morisawa.co.jp/hc/ja/articles/28443707966105-OpenType%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%81%A8%E3%81%AF)を利用している場合はCSSでその機能を使用できます。

プロポーショナルな文字詰めの例

```css
.proportional {
  font-feature-settings: "palt";
}
```

参考: https://ics.media/entry/14087/

# システムフォント（デバイスフォント）

OSに標準搭載されているフォントです。  
macOSやWindows、iOSやAndroidなど、OS/デバイスごとに使用できるフォントが異なります。  
そのため、システムフォントのみで全てのユーザーに同じ書体でサイトを表示させる事は難しいです。

日本語書体で、代表的なものは以下になります。

## ゴシック体

- **ヒラギノ角ゴシック** `"Hiragino Sans"`  
  macOS/iOSの標準書体で、クセの少ない書体です。ただし、macOSとiOSでインストールされているウェイトが違います。
- **メイリオ** `Meiryo`
  Windowsに標準搭載されている、可読性の良い近代的なゴシック書体です。
- **游ゴシック** `"Yu Gothic"`, `"YuGothic"`  
  macOS/Windows両方に搭載されている、ややクラシカルな印象の書体です。ただし、Safariではダウンロードフォント扱いとなり表示できません。また、スマホiOS/Andoridには入っていません。
- **Noto Sans JP** `Noto Sans JP`  
  Googleが開発し、Androidに搭載されている書体です。後述のGoogle Fontsで配信されているので、Webフォントとして利用されます。

## 明朝体

- **ヒラギノ明朝** `"Hiragino Mincho Pro"`
  macOS/iOSに搭載されている明朝体です。
- **游明朝** ,`"Yu Mincho"` `"YuMincho"`
  macOS/Windows両方に搭載されている明朝体です。

＊Androidには標準では日本語の明朝体はインストールさせていません。

## CSSサンプル（ゴシック体）

- macOS/iOSでは Helvetica Neue と ヒラギノ角ゴシック
- Windowsでは Arial と メイリオ
- Androidでは デバイス標準（多くはRobotoとNoto Sans）
  が使用されます。

```css
body {
  font-family: "Helvetica Neue", Arial, "Hiragino Sans", Meiryo, sans-serif;
}
```

参考: https://ics.media/entry/200317/  
参考: https://saruwakakun.com/font-family

# Webフォント

システムフォントに無いフォントもページ読み込み時にダウンロードさせる事で表示する事ができます。  
また、[Google Fonts](https://fonts.google.com/) などのフォント配信サービスを利用することで、簡単にWebサイトで利用できます。

> 自前でフォントをサーバーにアップして利用する事もできますが、フォントライセンスに注意してください。
> 有料で購入したフォントをWeb利用の契約無しにサーバーにアップするのは違法となります。  
> また無料であっても商用利用やWebでの配布が禁止されている場合もあります。

特に日本語書体はグリフ数が多い事もあり、Webフォントの利用はパフォーマンスの観点ではあまり良くありません。
最小限の利用に留め、多用するのは避ける様にしましょう。

＊Google Fontsはwoff2という形式なので上記のOpenType機能は使えません。

## Google Fontsの利用例

日本語書体の `Noto Sans Japanese` を組み込んでみます。

1. Google Fontsの [Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP) のページにアクセスし、右上の「**Get font**」をクリックします。
2. 右上の買い物アイコンをクリックすると出てくる、「**Get embed code**」 をクリックすると、以下の様なコードが表示されるので、コピーして、作成中のhtmlファイルの `<head>` タグの中にペーストします。
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
     rel="stylesheet"
   />
   ```
3. 作成中のCSSに以下の様に記述するとページ全体にNoto Sansが適用されます。
   ```css
   body {
     font-family: "Noto Sans JP", sans-serif;
   }
   ```

英字フォントなど、複数のフォントをGoogle Fontsから読み込みたい場合は **1.** の後に別のフォントを選択（**Get font**）し、**Get embed code**をすると、複数読み込みの為の `<link>` タグが出てきます。

## その他フォント配信サービス

- [Adobe Fonts](https://fonts.adobe.com/?locale=ja-JP) ＊Adobe契約があれば無料。ただし商用利用は別契約が必要。
- [FONTPLUS](https://fontplus.jp/home) ＊有料
- [TypeSquare](https://typesquare.com/ja/service) ＊有料
