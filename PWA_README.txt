PWA / ホーム画面追加対応メモ

作成日: 2026-06-03

追加・更新内容:
- manifest.webmanifest を追加
- service-worker.js を追加
- icons/icon-192.png / icons/icon-512.png を追加
- 全HTMLにPWA用meta/linkタグを追加
- 全HTMLにservice worker登録スクリプトを追加
- index.html にホーム画面追加方法の案内を追加

運用方針:
- HTMLはネットワーク優先で取得し、古いお知らせが表示されにくいようにしています。
- 画像やアイコンなどの静的ファイルは軽くキャッシュします。
- GitHub Pages上で動作する想定です。

アップロード対象:
- manifest.webmanifest
- service-worker.js
- icons/ フォルダ
- 更新された全HTML
- search-data.js
