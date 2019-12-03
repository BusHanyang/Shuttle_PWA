console.log("Hello from service worker");

// workbox.skipWaiting();
workbox.precaching.precacheAndRoute(self.__precacheManifest);