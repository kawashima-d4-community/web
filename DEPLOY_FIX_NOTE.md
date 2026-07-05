# GitHub Pages デプロイ安定化メモ

このZIPには、通常のホームページファイルに加えて以下を追加しています。

- `.nojekyll`
- `.github/workflows/pages.yml`

`pages.yml` は GitHub Pages の公開処理を安定化するためのワークフローです。
既存の Pages 用ワークフローがある場合は、重複させず、この内容で置き換えてください。
