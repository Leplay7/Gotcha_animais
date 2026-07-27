self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (event) => {
  // Pass-through simples para manter o app online no PWA
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
