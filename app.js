// 川島第四町内会 PWA専用ホーム画面（試作版）
// 既存のmanifestやService Worker、index.htmlは変更しません。
// 初回公開後は、お知らせ表示を共通JSONへ移行する想定です。
(() => {
  'use strict';
  // 過去のイベントを目立たせないため、終了翌日以降に注目カードを非表示にします。
  const eventEnd = new Date('2026-10-26T00:00:00+09:00');
  const card = document.querySelector('.feature-card');
  if (card && Date.now() >= eventEnd.getTime()) card.hidden = true;
})();
