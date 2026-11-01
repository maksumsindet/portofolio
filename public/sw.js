// Empty Service Worker to gracefully handle browser cache requests
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

