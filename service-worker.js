const CACHE_NAME = 'tally-cache-v1';
const FILES = ['index.html','manifest.json','favicon.png'];

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE_NAME).then(c => c.addAll(FILES))
));

self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));