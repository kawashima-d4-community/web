// 川島第四町内会 PWA Service Worker
// 2026-10-24 大運動会中止告知・アプリ画面更新
// HTMLはネットワーク優先、CSS/JS等はキャッシュ優先。
const CACHE_NAME = 'kawashima-d4-pwa-20261024-cancel-v1';
const STATIC_ASSETS = [
  './app.html',
  './app.css',
  './app.js',
  './summer-festival-20260912-stage.jpg',
  './summer-festival-20260912-band.jpg',
  './summer-festival-20260912-opening.jpg',
  './sawayaka-cleaning-20260920.jpg',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './d4-mark2.png',
  './d4-mark1.png',
  './summer-festival-mikoshi.jpg',
  './summer-festival-program.png',
  './summer-festival-program-flyer.jpg',
  './taiko-kai-flyer.jpg',
  './festival-volunteer-form-qr.png',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // 各ファイル単位で保存。過去イベント画像等の欠落で全体を失敗させない。
      await Promise.all(STATIC_ASSETS.map(url => cache.add(url).catch(() => undefined)));
    })
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('kawashima-d4-pwa-') && k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin !== location.origin || request.method !== 'GET') return;
  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match(request).then(cached => cached || caches.match('./app.html') || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(caches.match(request).then(cached => {
    if (cached) return cached;
    return fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
      }
      return response;
    });
  }));
});
