# ドメインプレースホルダサイト

このリポジトリは、ドメインのプレースホルダサイトとして使用されています。

## 機能

- 美しいプレースホルダページ
- 5秒後の自動リダイレクト
- クリックによる即座リダイレクト
- レスポンシブデザイン

## 設定方法

1. `index.html` の `REDIRECT_URL` 変数を目的のURLに変更してください
2. GitHub Pagesを有効にしてください

## GitHub Pages設定

1. リポジトリの Settings → Pages に移動
2. Source を "Deploy from a branch" に設定
3. Branch を "master" または "main" に設定
4. フォルダを "/ (root)" に設定

# ドメインプレースホルダサイト

このリポジトリは、ドメインのプレースホルダサイトとして使用されています。

## ファイル構成

```text
.
├── index.html          # メインページ
├── 404.html           # カスタム404ページ
├── css/
│   ├── style.css      # メインページのスタイル
│   └── 404.css        # 404ページのスタイル
├── js/
│   └── main.js        # メインページのJavaScript
├── CNAME              # カスタムドメイン設定
├── _config.yml        # GitHub Pages設定
└── README.md          # このファイル
```

## 主な機能

- 美しいプレースホルダページ
- 5秒後の自動リダイレクト
- クリックによる即座リダイレクト
- キーボード操作によるリダイレクト
- レスポンシブデザイン
- フェードアウトエフェクト

## 初期設定

1. `js/main.js` の `CONFIG.REDIRECT_URL` を目的のURLに変更してください
2. `CNAME` ファイルを実際のドメイン名に変更してください
3. GitHub Pagesを有効にしてください

## GitHub Pages セットアップ

1. リポジトリの Settings → Pages に移動
2. Source を "Deploy from a branch" に設定
3. Branch を "master" または "main" に設定
4. フォルダを "/ (root)" に設定

## カスタマイズガイド

### リダイレクト設定

- `js/main.js` の `CONFIG.REDIRECT_URL` でリダイレクト先を変更
- `CONFIG.COUNTDOWN_SECONDS` でカウントダウン秒数を変更

### デザインカスタマイズ

- `css/style.css` でメインページのデザインを変更
- `css/404.css` で404ページのデザインを変更
- レスポンシブデザイン対応済み

### 機能追加

- `js/main.js` で追加の機能を実装可能
