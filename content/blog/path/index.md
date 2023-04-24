---
title: ファイルパスについて
date: "2019-01-16"
excerpt: "HTML・CSSなど共通で使用するパス(path)について"
tags: ["HTML", "CSS"]
featuredImage: "featured-html.png"
samples: [{ file: "basic/path.zip", title: "パス演習" }]
---

# パス(Path)とは

ファイルやフォルダ(ディレクトリ)の場所を示す情報のことです。  
HTMLやCSSでは、**画像やファイルの読み込み**や**ハイパーリンク**の設定などに使用されます。

パスはスラッシュ`/` で区切られた一連の**ディレクトリ名**と**ファイル名**で表されます。  
＊ディレクトリは階層とも呼ばれます。

パスの種類には大きく`絶対パス`と`相対パス`の2種類があります。  
＊本講義内の演習では基本的に**相対パスを使用します**。

また、パスで指定する方法の他に[URL](/intro/about-web/#url%E3%81%A8%E3%81%AF)で指定することもできます。  
ex. `<a href="https://example.com/">リンクテキスト</a>`

## 絶対パス

**ドキュメントルートを起点**としてパスを指定する方法です。  
パスが`/`から始まると現在のサーバーの一番上の階層(`ルート`)という意味になります。  
ex. `/foo/index.html`  
_＊ローカルファイルのHTMLをブラウザで直接開いてる場合は使えないので注意してください。_

## 相対パス

**現在のファイルを起点**として相対的にパスを指定する方法です。

- `ディレクトリ名/` or `ファイル名` or `ディレクトリ名/ファイル名` で指定します。
- `./`で始めると **現在の階層** を表します。（./は省略可能）。
- `../`で**一つ上の階層**となります。二つ上の階層を指定する場合は `../../` となります。

> #### index.html について
>
> `index.html` というファイルは、特殊なファイル名で、通常はそのウェブサイトやディレクトリのデフォルトのページを指します。  
> リンクなどでファイルパスを記述する際はこの `index.html` は省略可能で、多くの場合は省略されています。  
> `http://example.com/index.html` は `http://example.com/` と記述しても同じHTMLを指します。  
> ＊ただし、ローカルファイルのHTMLをブラウザで直接開いてる場合は省略できません。

# HTMLでのパスの使用例

以下の様なファイル構成のサイトがあるとします。  
＊ タグやの属性の記述ルールは右を参照 [タグ・属性の記述ルール](/html/#%E3%82%BF%E3%82%B0%E5%B1%9E%E6%80%A7%E3%81%AE%E8%A8%98%E8%BF%B0%E3%83%AB%E3%83%BC%E3%83%AB)

```directory-structure
<http://example.com>
    ├── index.html
    ├── css
    │   └── style.css
    ├── images
    │   ├── foo.png
    │   └── bar.png
    └── about
        └── index.html
```

## CSS ファイル の読み込み

`<link>`タグの`href` 属性にパスを記述します。`rel="stylesheet"`属性も必ず記述してください。

#### `/index.html` に記述する場合

```html
<!--  ↓ トップページ `/index.html` で、相対パスでスタイルシートの読み込み -->
<link rel="stylesheet" href="css/style.css" />

<!--  ↓ URLでスタイルシートの読み込み -->
<link rel="stylesheet" href="http://example.com/css/style.css" />
```

#### `/about/index.html` に記述する場合

```html
<!--  ↓ 下層ページ `/about/index.html` からのスタイルシートの読み込みは `../` で一階層上がる必要がある -->
<link rel="stylesheet" href="../css/style.css" />
```

## ページリンク

`<a>`タグの`href` 属性にパスを記述します。 `target`属性に`_blank`を設定すると別タブで開きます。

```html
<!-- ↓ `/index.html`から `/about/index.html`へリンク  -->
<a href="about/index.html">「about」フォルダ内の「index.html」へ</a>

<!-- ↓ `index.html`は省略可能  -->
<a href="about/">「about」フォルダ内の「index.html」へ</a>

<!-- ↓ 外部リンク ＊ target="_blank" 属性をいれると別タブで開く -->
<a href="http://example.com" target="_blank">example.comへ</a>
```

```html
<!-- ↓ `/pages/about.html`から `/index.html`へリンク  -->
<a href="../index.html">トップへ</a>

<!-- ↓ `index.html`は省略可能  -->
<a href="../">トップへ</a>
```

## 画像の表示

`<img>`タグの`src`属性に画像へのパスを記述します。`alt`属性は画像の代替テキストを記述します。

```html
<!-- ↓  `/index.html` から　`images/foo.png` 画像読み込み -->
<img src="images/foo.png" alt="Foo" />
```

```html
<!-- ↓  `/about/index.html` から　`images/foo.png` 画像読み込み -->
<img src="../images/bar.png" alt="Bar" />
```

# フォルダ名やファイル名のルール

- フォルダ名やファイル名は必ず **半角英数字** を使用してください。日本語はNGです。
- `-` `_`以外の**記号や空白を含めてはいけません**。`&`,`+`,`?` `<` などはNGです。
- **拡張子を必ず指定**してください。（`.html`,`.css`など）

---

- **OK** `filename.html` `file-name.html`
- **_NG_** `ファイル.html` `file name.html` `file&name.html` `😃.html`
