// PolyTrack Standalone Service Worker (Offline & PWA Cache)
const CACHE_NAME = 'polytrack-standalone-v41';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './static_adapter.js',
  './vehicle_models.js',
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
  './images/vehicles_tab.svg',
  './images/vehicle_f1.svg',
  './images/vehicle_gt.svg',
  './images/vehicle_van.svg',
  './images/vehicle_plane.svg',
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

  const isCode = url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.bundle.js') || url.pathname.endsWith('/');

  // Network-First for HTML and JavaScript bundles (so updates are instant online, but works offline)
  if (isCode) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const toCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
            return caches.match('./index.html');
          }
        });
      })
    );
    return;
  }

  // Cache-First for static assets (images, 3D models, wasm, fonts, audio)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
