川島第四町内会 PWA起動先切り替えパッケージ（2026-10-19）

目的：PWAの起動先を index.html → app.html に切り替える。

追加：app.html, app.css, app.js
更新：manifest.webmanifest, service-worker.js
変更しない：index.html とその他の既存ページ

注意：ZIPをそのままリポジトリ全置換しないでください。5ファイルだけをルートにアップロード／更新してください。
GitHubの編集権限があれば、専用ブランチ→Pull Request→検証→mainへマージを推奨します。

確認項目：
1. https://kawashima-d4-community.github.io/web/app.html が表示される。
2. メニューと既存ページへのリンクが動く。
3. https://kawashima-d4-community.github.io/web/manifest.webmanifest の start_url が ./app.html になった。
4. Androidでアプリを一旦完全終了して再起動。古い起動先が残る場合はOS/ブラウザによって再インストールが必要な場合あり。
5. iPhoneでもホーム画面追加から表示確認。
6. オフライン動作と更新反映を確認。

注意：試作のお知らせ3件は固定情報です。日付が古くなるため、本運用前に共通データへの移行が望まれます。

戻す場合：manifest.webmanifestのstart_urlを./index.htmlに戻し、service-worker.jsを前の版へ戻す。既存インストールは再追加が必要な場合があります。


[2026-10-19 会長Xタイムライン追加]
app.htmlに既存サイトと同じElfsight埋め込みIDを追加しました。app.cssも更新しています。
Xタイムラインは外部サービス（Elfsight/X）の読み込みが必要で、オフライン表示には対応しません。
表示されない際はXへのリンクを利用してください。Elfsight契約のPV上限等は別途確認が必要です。
