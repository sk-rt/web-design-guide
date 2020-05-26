---
title: ファイルパスについて
date: "2019-01-16"
excerpt: "HTML・CSSなど共通で使用するパス(path)について"
tags: ["HTML", "CSS"]
featuredImage: "featured-html.png"
samples: [{ file: "basic/path.zip", title: "パス演習" }]
---

# パス(Path)とは

ファイルやフォルダ(ディレクトリ)の場所を示す情報のこと。  
HTML や CSS では**画像やファイルの読み込み**や**リンク**などに使用される。

パスは**スラッシュ`/` で区切られた一連のディレクトリ名とファイル名で表す。**  
ディレクトリは`階層`ともいう。

パスの種類には大きく`絶対パス`と`相対パス`がある。  
＊本サイト内の演習では基本は相対パスを使用する。

## 絶対パス

#### URL で指定

主に外部サイトのパスを指定するのに使う。  
ex. `http://example.com/path/index.html`

#### スラッシュから始まるパスで指定

パスが`/`から始まると現在のサーバーの一番上の階層(`ルート`)という意味になる。  
ex. `/path/index.html`  
＊ブラウザでローカルファイルの HTML を直接開いてる場合は使えないので注意。

## 相対パス

現在のファイルを起点として相対的にパスを指定する方法。

- `ディレクトリ名/` or `ディレクトリ名/ファイル名`で指定する。
- 現在の階層は`./`で始めるか、なにも指定しない（./は省略可能）。
- 上の階層を指定するときは`../`で一つ階層が上がる。二つ階層を上げる時は `../../`

# html でのパスの使用例

以下の様なファイル構成のサイトがあるとする。

```directory-structure
<http://example.com>
    ├── index.html
    ├── css
    │   └── style.css
    ├── images
    │   ├── foo.png
    │   └── bar.png
    └── pages
        └── about.html
```

## CSS ファイル の読み込み

`<link>`タグの`href` 属性にパスを記述する。`rel="stylesheet"`も必ず指定すること。

```html
<!--  ↓ トップページ `/index.html` で、相対パスでスタイルシートの読み込み -->
<link rel="stylesheet" href="css/style.css" />

<!--  ↓ 絶対パス(URL)でスタイルシートの読み込み -->
<link rel="stylesheet" href="http://example.com/css/style.css" />
```

```html
<!--  ↓ 下層ページ `/pages/about.html` で、相対パスでスタイルシートの読み込み -->
<link rel="stylesheet" href="../css/style.css" />
```

## ページリンク

`<a>`タグの`href` 属性にパスを記述する。 `target`属性に`_blank`を設定すると別タブで開く。

```html
<!-- ↓ `/index.html`から `/pages/about.html`へリンク  -->
<a href="pages/about.html">「pages」フォルダ内の「about.html」へ</a>

<!-- ↓ 外部リンク ＊ target="_blank" 属性をいれると別タブで開く -->
<a href="http://example.com" target="_blank">example.comへ</a>
```

```html
<!-- ↓ `/pages/about.html`から `/index.html`へリンク  -->
<a href="../index.html">トップへ</a>
```

## 画像の表示

`<img>`タグの`src`属性に画像へのパスを記述する。`alt`属性は画像の代替テキストを記入する。

```html
<!-- ↓  `/index.html` から　`images/foo.png` 画像読み込み -->
<img src="images/foo.png" alt="Foo" />
```

```html
<!-- ↓  `/pages/about.html` から　`images/foo.png` 画像読み込み -->
<img src="../images/bar.png" alt="Bar" />
```

# フォルダ名/ファイル名のルール

- フォルダ名やファイル名は必ず **_半角英数字_** を使用すること。
- `-` `_`以外の**_記号や空白を含めない_**こと。`&`,`+`,`?`などは NG。
- **_拡張子を必ず指定_**すること。`.html`,`.css`など

---

- **OK** `filename.html` `file-name.html`
- **_NG_** `ファイル.html` `file name.html` `file&name.html` `😃.html`
