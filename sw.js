/* Selmex Order Tracker - service worker
   - App files are cached so the app opens instantly and the shell works offline.
   - Order data (Supabase) is NEVER cached: it always comes live from the network.
   - Bump VERSION when you want every phone to drop its old cached files. */
const VERSION = "selmex-v2";
const CORE = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
const CDN = ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(CORE.map(u => c.add(u)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const put = (req, res) => { if (res && (res.ok || res.type === "opaque")) caches.open(VERSION).then(c => c.put(req, res.clone())); return res; };

// network first (always the newest app), cache as the offline fallback
const networkFirst = async req => {
  try { return put(req, await fetch(req)); }
  catch (_) { return (await caches.match(req)) || (await caches.match("index.html")) || Response.error(); }
};
// show the cached copy immediately, refresh it quietly in the background
const staleWhileRevalidate = async req => {
  const hit = await caches.match(req);
  const net = fetch(req).then(r => put(req, r)).catch(() => hit);
  return hit || net;
};

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    const isPage = req.mode === "navigate" || /\.(html|js)$/.test(url.pathname) || url.pathname.endsWith("/");
    e.respondWith(isPage ? networkFirst(req) : staleWhileRevalidate(req));
  } else if (CDN.includes(url.hostname)) {
    e.respondWith(staleWhileRevalidate(req));
  }
  // anything else (Supabase API, auth, storage) goes straight to the network
});
