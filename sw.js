const CACHE_NAME = 'cryptowebbuild-v7'; // Incremented version
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/hero-avatar.webp',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle requests to our origin
  if (!event.request.url.startsWith(self.location.origin)) {
     return;
  }

  // Strategy: Network First for HTML navigation and API calls (ensure fresh content)
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(event.request)
            .then(response => response || caches.match('/')); // Fallback to home/offline page
        })
    );
    return;
  }

  // Strategy: Stale-While-Revalidate for static assets (images, js, css, fonts)
  // This is critical for the "Offline Reading" requirement for blogs
  if (
      event.request.destination === 'script' ||
      event.request.destination === 'style' ||
      event.request.destination === 'image' ||
      event.request.destination === 'font'
  ) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          }).catch(err => {
              // Network failed, do nothing, we rely on cache
              console.log('Network fetch failed for asset, using cache if available');
          });
          return cachedResponse || fetchPromise;
        })
      );
      return;
  }

  // Default fallback
  event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
  );
});
