// PolyTrack Standalone Service Worker (Offline & PWA Cache)
const CACHE_NAME = 'polytrack-standalone-v3';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './static_adapter.js',
  './main.bundle.js',
  './simulation_worker.bundle.js',
  './error_screen.bundle.js',
  './112.bundle.js',
  './604.bundle.js',
  './535.bundle.js',
  './657.bundle.js',
  './polytrack_physics.wasm',
  './forced_square.woff2',
  './forced_square.json',
  './manifest.json',
  './lib/polytrack_physics.js',
  './lib/draco/draco_wasm_wrapper.js',
  './lib/draco/draco_decoder.wasm',
  './models/car.glb',
  './models/garage.glb',
  './models/blocks.glb',
  './models/road.glb',
  './models/road_wide.glb',
  './models/pillar.glb',
  './models/planes.glb',
  './models/signs.glb',
  './models/wall_track.glb',
  './images/logo.svg',
  './images/discord.svg',
  './images/smoke.png',
  './tracks/community/qxyntra_gp.track',
  './tracks/community/qxyntra_dunes.track',
  './tracks/community/qxyntra_alpine.track',
  './tracks/community/thumbnails/qxyntra_gp.png',
  './tracks/community/thumbnails/qxyntra_dunes.png',
  './tracks/community/thumbnails/qxyntra_alpine.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-cache partial fail, continuing anyway:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass cache for WebSocket, API calls, or non-GET requests
  if (event.request.method !== 'GET' || url.pathname.includes('/api/') || url.protocol.startsWith('ws')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately, but update in background for HTML/JS
        if (url.pathname.endsWith('.html') || url.pathname.endsWith('.bundle.js')) {
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          }).catch(() => {});
        }
        return cachedResponse;
      }

      // Network fallback + cache runtime assets (tracks, flags, audio, etc.)
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch((err) => {
        console.warn('[SW] Fetch failed for:', event.request.url, err);
        throw err;
      });
    })
  );
});
