川島第四町内会 Webサイト＋PWAアプリ 統合バックアップ
作成日: 2026-10-19

構成:
- ユーザー提供のホームページ一式（2026-10-10版）：96 ファイル
- 最新PWAアプリ試作版（会長X表示対応）：app.html / app.css / app.js
- PWA起動先切替設定：manifest.webmanifest / service-worker.js
- 補完アイコン：icons/icon-192.png / icons/icon-512.png

注意事項:
1. これは「提供された2026-10-10版ZIP＋会長X対応PWA試作版」を統合したバックアップです。
   現在公開中のGitHub mainブランチを直接ダウンロードした完全複製ではありません。
2. 元ZIPにiconsフォルダが無かったため、同梱のd4-mark2.pngからPWAアイコンを再生成しています。
   公開GitHubにあるアイコンとピクセル単位で同じとは限りません。
3. 下記の画像等は統合ZIPにありません（元のZIPにもありません）。
   summer-festival-program.png, summer-festival-program-flyer.jpg
   これらへの参照はService Workerに残っていますが、取得エラーは個別に無視する設計です。
4. manifest.webmanifestはPWAの起動先を./app.htmlにする設定です。
5. アプリのお知らせ情報は現時点で静的表示です。会長Xの埋込表示は外部サービス依存です。
6. 既存サイトに復元・反映する場合、必ずGitHub上の現行mainをバックアップして差分を確認してください。
7. GitHubへのアップロードや本番公開は行っていません。

GitHub Pages配置: ZIP内のファイル群をリポジトリのルートへ展開する想定です。
注意: このZIPを現行リポジトリへそのまま全上書きすることは推奨しません。


[2026-10-24追記]
このバックアップは2026-10-24に更新されています。詳細は BACKUP_README_20261024.txt を参照してください。
