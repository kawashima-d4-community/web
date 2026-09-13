// 川島第四町内会 PWA Service Worker
// Version: 2026-09-13-20260913_161500_homepage_regression_fixed
// HTMLは最新情報を優先し、画像・アイコン等は軽くキャッシュします。
// Update Note: トップページ更新情報のデグレ修正。9月・8月の更新履歴と夏祭り特設サイト導線を復元。

const CACHE_NAME = 'kawashima-d4-pwa-20260913_161500_homepage_regression_fixed';
const STATIC_ASSETS = [
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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin !== location.origin || request.method !== 'GET') return;

  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
        return response;
      });
    })
  );
});
