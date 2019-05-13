// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";
const precacheFiles = [
  /* Add an array of files to precache for your app */
  'index.html',
  'css/alert.css',
  'css/index.css',
  'css/responsive.css',
  'sounds/balls.mp3',
  'sounds/Bounce.mp3',
  'sounds/Buy fail.mp3',
  'sounds/Buy.mp3',
  'sounds/double points.mp3',
  'sounds/lose.mp3',
  'sounds/portal.mp3',
  'sounds/reverse.mp3',
  'sounds/Score.mp3',
  'sounds/slow.mp3',
  'sounds/song.mp3',
  'sounds/speed.mp3',
  'credits.html',
  'js/edit.js',
  'js/raqueta.js',
  'js/script.js',
  'js/sub.js',
  'js/game.js',
  'js/colision.js',
  'js/default.png',
  'img/2balls.png',
  'img/atras.png',
  'img/boton_pausa.png',
  'img/buy.png',
  'img/coin.png',
  'img/derecha.png',
  'img/edit.png',
  'img/fondo.png',
  'img/gear.png',
  'img/icon.png',
  'img/izquierda.png',
  'img/later.png',
  'img/lentitud.png',
  'img/luz_off.png',
  'img/luz_on.png',
  'img/menu.png',
  'img/music.png',
  'img/music_off.png',
  'img/pausa.png',
  'img/portal.png',
  'img/portal_i.png',
  'img/reverse.png',
  'img/select.png',
  'img/selected.png',
  'img/sound.png',
  'img/sound_off.png',
  'img/sub.png',
  'img/twitter.png',
  'img/velocidad.png',
  'img/video.png',
  'img/web.png',
  'img/x2.png',
  'img/balls/ace.png',
  'img/balls/aim.png',
  'img/balls/alemania.png',
  'img/balls/angry.png',
  'img/balls/argentina.png',
  'img/balls/brasil.png',
  'img/balls/canada.png',
  'img/balls/cookie.png',
  'img/balls/default.png',
  'img/balls/earth.png',
  'img/balls/españa.png',
  'img/balls/france.png',
  'img/balls/gear.png',
  'img/balls/godzilla.png',
  'img/balls/heart.png',
  'img/balls/illuminati.png',
  'img/balls/inglaterra.png',
  'img/balls/mexico.png',
  'img/balls/music.png',
  'img/balls/novum.png',
  'img/balls/pac man.png',
  'img/balls/pencil.png',
  'img/balls/pewds.png',
  'img/balls/pewds_big.png',
  'img/balls/plane.png',
  'img/balls/portugal.png',
  'img/balls/prohibido.png',
  'img/balls/prueba.png',
  'img/balls/rubik.png',
  'img/balls/russia.png',
  'img/balls/spinner.png',
  'img/balls/sword.png',
  'img/balls/wefere.png',
  'img/balls/in game/ace.png',
  'img/balls/in game/aim.png',
  'img/balls/in game/alemania.png',
  'img/balls/in game/angry.png',
  'img/balls/in game/argentina.png',
  'img/balls/in game/brasil.png',
  'img/balls/in game/canada.png',
  'img/balls/in game/cookie.png',
  'img/balls/in game/default.png',
  'img/balls/in game/earth.png',
  'img/balls/in game/españa.png',
  'img/balls/in game/france.png',
  'img/balls/in game/gear.png',
  'img/balls/in game/godzilla.png',
  'img/balls/in game/heart.png',
  'img/balls/in game/illuminati.png',
  'img/balls/in game/inglaterra.png',
  'img/balls/in game/mexico.png',
  'img/balls/in game/music.png',
  'img/balls/in game/novum.png',
  'img/balls/in game/pac man.png',
  'img/balls/in game/pencil.png',
  'img/balls/in game/pewds.png',
  'img/balls/in game/pewds_big.png',
  'img/balls/in game/plane.png',
  'img/balls/in game/portugal.png',
  'img/balls/in game/prohibido.png',
  'img/balls/in game/prueba.png',
  'img/balls/in game/rubik.png',
  'img/balls/in game/russia.png',
  'img/balls/in game/spinner.png',
  'img/balls/in game/sword.png',
  'img/balls/in game/wefere.png',


];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  console.log("[PWA Builder] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function (response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("[PWA Builder] Network request failed and no cache." + error);
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
