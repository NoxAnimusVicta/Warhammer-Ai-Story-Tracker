'use strict';
const BASE=new URL('./',self.location.href);
const PREFIX='malaspina-dossier:'+BASE.pathname+':';
const CACHE=PREFIX+'v4';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(path=>new URL(path,BASE).href))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 if(url.pathname===new URL('./release.json',BASE).pathname){event.respondWith(fetch(event.request,{cache:'no-store'}));return;}
 if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(response=>{if(!response.ok)throw Error('Unavailable');const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(new URL('./index.html',BASE).href,copy)));return response;}).catch(()=>caches.match(new URL('./index.html',BASE).href)));}
 else event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
