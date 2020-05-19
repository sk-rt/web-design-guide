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

## 絶対パス

#### URL で指定

主に外部サイトのパスを指定するのに使う。  
ex. `https://web-d.netlify.app/path/index.html`

#### スラッシュから始まるパスで指定

パスが`/`から始まると現在のサーバーの一番上の階層(`ルート`)という意味になる。  
ex. `/path/index.html`  
＊ブラウザでローカルファイルの HTML を直接開いてる場合は使えないので注意。

## 相対パス

現在のファイルを起点として相対的にパスを指定する方法。

- `ディレクトリ名/` or `ディレクトリ名/ファイル名`で指定する。
- 上の階層を指定するときは`../`で一つ階層が上がる。
- 現在の階層は`./`で始めるか、なにも指定しない（./は省略可能）。

### html でのパスの使用例

```html
<!-- ↓ (例)CSS読み込み -->
<link rel="stylesheet" href="./css/style.css" />

<!-- ↓ (例)リンク -->
<a href="page/01.html">`page`フォルダ内の`01.html`</a>

<!-- ↓ (例)画像読み込み -->
<img src="../images/fig.png" alt="1つ上の階層の`images`フォルダ内の`fig.png`" />

<!-- ↓ (例)画像読み込み -->
<img src="../../images/fig.png" alt="2つ上の階層の `images`フォルダ内の`fig.png" />

<!-- ↓ (例)画像読み込み 絶対パス -->
<img src="/images/fig.png" alt="ルートから `images`フォルダ内の`fig.png" />
```

# フォルダ名/ファイル名のルール

- フォルダ名やファイル名は必ず **_半角英数字_** を使用すること。
- `-` `_`以外の**_記号や空白を含めない_**こと。
- **_拡張子を必ず指定_**すること。`.html`,`.css`など

---

- **OK** `filename.html` `file-name.html`
- **_NG_** `ファイル.html` `file name.html` `file&name.html` `😃.html`
