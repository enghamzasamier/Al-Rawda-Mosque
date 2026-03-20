const CACHE_NAME = 'al-rawda-v3';

// Static assets to cache immediately
const PRECACHE_ASSETS = [
  '/',
  '/images/logo.avif',
  '/favicon.ico',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip videos and external scripts/fonts (handled by browser or facade)
  if (url.hostname.includes('youtube') || url.hostname.includes('facebook') || url.hostname.includes('googletagmanager')) {
    return;
  }

  // Cache-first for static assets (fonts, images, chunks)
  // Stale-while-revalidate for pages and other assets
  const isStaticAsset = url.pathname.startsWith('/_next/static/') || 
                       url.pathname.startsWith('/fonts/') || 
                       url.pathname.endsWith('.avif') || 
                       url.pathname.endsWith('.webp');

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
  } else {
    // Stale-while-revalidate for everything else
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      })
    );
  }
});
