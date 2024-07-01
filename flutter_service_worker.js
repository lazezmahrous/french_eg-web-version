'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b8fd67807d83ad3c19b27e2bba18b4e2",
"assets/AssetManifest.bin.json": "328fd143fe6b6ab206c2c663ffc65e9c",
"assets/AssetManifest.json": "2d218cde39d81dc1a082a17deef7d87d",
"assets/assets/audio/zagrouta.mp3": "d005b739426f032751322e483cbe82e7",
"assets/assets/cardimages/colors.png": "a590c68af9058913a0b646f922a2f3eb",
"assets/assets/cardimages/download.jpeg": "ee783021ddfc0136a1b1cea21f8a56a8",
"assets/assets/cardimages/familymembers.jpg": "34a2d29cdbd270f79dd95dddf3b26f2c",
"assets/assets/cardimages/familymembers_icon.png": "d7858e7f976265fc9d8de470742a8e05",
"assets/assets/cardimages/familymembers_image.png": "643880d8f6c0f0fe64064a4c3f13aead",
"assets/assets/cardimages/icons8-colors-58.png": "16762bddc87eebf21fbe5569b78f7701",
"assets/assets/cardimages/icons8-defend-family-64.png": "cb68fda570f17ffaeba59162f5e2e1ce",
"assets/assets/cardimages/icons8-dictionary-48.png": "d1863d0d4948cf57aa78066aa5c0a295",
"assets/assets/cardimages/icons8-numbers-64.png": "770c7d3da2150b7d97e41a898d0cbb32",
"assets/assets/cardimages/icons8-you-(plural)-48.png": "17dada8bae2d515ec45f918cdf60db51",
"assets/assets/cardimages/miso.png": "81eb32f4e174719f84b95e1f8cc49abd",
"assets/assets/cardimages/numbers.png": "9fb21f9b02ed719570b3251ea1c006b2",
"assets/assets/cardimages/pexels-cottonbro-studio-4709285.jpg": "e75ca240d169e4ac8fde7708e7ecd524",
"assets/assets/cardimages/pexels-cottonbro-studio-4709286.jpg": "ccc886f39afe8764efa6113005fd7ee2",
"assets/assets/cardimages/pexels-cottonbro-studio-4709289.jpg": "9e385ab6e4dc44b8a28376bc63b04268",
"assets/assets/cardimages/pexels-olia-danilevich-4974920.jpg": "966253b8236985bacd85eaf8bae65be4",
"assets/assets/cardimages/pronouns.png": "cdca3baba270c35a81fc701201fe7903",
"assets/assets/cardimages/result.jpg": "84129c81fbda37971558b556ad382268",
"assets/assets/cardimages/result.png": "0aede7427c47d47652ee99ca8b73f75d",
"assets/assets/cardimages/words.png": "bbaa2233fc007566eadc25fcdf01b618",
"assets/assets/colors/color_black.png": "1d6ede6b96163c0de60018184a8f36da",
"assets/assets/colors/color_blue.png": "83f472fbdd0546f66f69c1fc9fa17898",
"assets/assets/colors/color_brown.png": "12e6b20f554f4f8c851ec47a365bf017",
"assets/assets/colors/color_dusty_yellow.png": "5b679e0183b88702b6528eb4da68cce8",
"assets/assets/colors/color_gray.png": "f50d1356a99bd6382b84527f3578c7a5",
"assets/assets/colors/color_green.png": "de033fee5288447f79091cd9b569604b",
"assets/assets/colors/color_orange.png": "b81930d1a3977602551bb20434dae816",
"assets/assets/colors/color_purple.png": "f5028c492e80e2bb066f2a79142d4558",
"assets/assets/colors/color_red.png": "dbcd4214d77182318965f6a86769b607",
"assets/assets/colors/color_white.png": "602d1b2c68eddf209d684b5c2c545391",
"assets/assets/colors/yellow.png": "b957cc2bdb10dff1d6067259db6d3bab",
"assets/assets/family_members/cousin.png": "ab527f5f0b6922e0542b9b43ad4d94fe",
"assets/assets/family_members/family_daughter.png": "cdd7fb9db2a675d46d06f89a86d0be0b",
"assets/assets/family_members/family_father.png": "c78f781ad62a3686c9be867167312c68",
"assets/assets/family_members/family_grandfather.png": "0121efe2ebcb97765637f7726ef16a7a",
"assets/assets/family_members/family_grandmother.png": "0fd3c11927b039403f33e98d072b39ac",
"assets/assets/family_members/family_mother.png": "6a8e31be689fb3a91661cdd5ec861b2e",
"assets/assets/family_members/family_older_brother.png": "469d30da1934a787aa84396760cfa687",
"assets/assets/family_members/family_older_sister.png": "a6a16e02a8dfe42bb3fd456f080bda41",
"assets/assets/family_members/family_son.png": "c59fcf64b6232ab64df4cc903245c42e",
"assets/assets/family_members/family_younger_brother.png": "06c833cc7f1be021c6ed16f383645197",
"assets/assets/family_members/family_younger_sister.png": "e78d81331555152baacde9b3e8e11b72",
"assets/assets/family_members/latante.png": "11554715566eed89a05336086ad5f55a",
"assets/assets/family_members/oncle.png": "a5cafa121d83f0a71b115cd67d61dcf2",
"assets/assets/family_members/tante.png": "8f578713b43cdff06281f28dafdd6dc4",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/icons/Appicon.png": "f2e7b45e37e4b9fbf30fc9ebb20762d8",
"assets/assets/icons/icon.jpeg": "5b125216607d459b18baffee4a35bc1a",
"assets/assets/icons/icons8-facebook.svg": "d1ebfd78a8c73bf3ad75cc7c550845e3",
"assets/assets/icons/icons8-instagram.svg": "e45ff02ef59442e48f4f292417f74130",
"assets/assets/icons/icons8-tiktok.svg": "76f91a79b19fcb86e813f9ca47ad14db",
"assets/assets/icons/icons8-whatsapp.svg": "1e5dc31fd372f8fffb5d9eb6ac4fbaef",
"assets/assets/numbers/0.png": "a08974df8d212874502991fdf5f7e04e",
"assets/assets/numbers/1.png": "35cdac522db59e52e4ba33c5e9ebf6c5",
"assets/assets/numbers/10.png": "be19fada27847541967fab4b0f56a6e5",
"assets/assets/numbers/11.png": "21b9c0643fbf210c184dabd7b9125ebd",
"assets/assets/numbers/12.png": "fdb2c4a36f7359e4bbf0f6db9b472c0e",
"assets/assets/numbers/13.png": "4e6f31e38b2562205ee300f548a28425",
"assets/assets/numbers/14.png": "ffd22c733b6e8c07a4e2469b0d3fbb96",
"assets/assets/numbers/15.png": "44b03b0fcce0a95f0d9b6be03f4e6729",
"assets/assets/numbers/16.png": "b1f2a895a4b9ed299eb92948c04a0b45",
"assets/assets/numbers/17.png": "f6db074acd76f4e2e4616fabe862255e",
"assets/assets/numbers/18.png": "e7824c3e86649acf69d0e51a9a735bd0",
"assets/assets/numbers/19.png": "98465420962687903c3c5b27490eea30",
"assets/assets/numbers/2.png": "d01af7a8f36fe1c5ecf97d3a76e26eba",
"assets/assets/numbers/20.png": "9a372e933084f3f65ce882a23ce08a09",
"assets/assets/numbers/21.png": "7e74298b7610e6f5ca82201762f765f2",
"assets/assets/numbers/22.png": "e8f6e45511407d6ef7c25145f1dcfcc3",
"assets/assets/numbers/23.png": "f0ab0b7a0b7efe3f2ff37d5d0120d9f9",
"assets/assets/numbers/24.png": "14199b47c4f2499fc4bf4c17a61b520c",
"assets/assets/numbers/25.png": "6b9c5069cefc25d5d2228a8f58c9a4db",
"assets/assets/numbers/26.png": "2083fe9e0f7e00c734f8786004fe172c",
"assets/assets/numbers/27.png": "d0be545b8f3aab2338b5be4e31dc2416",
"assets/assets/numbers/28.png": "98f2ef18bb86364b3373a52ef5bfabae",
"assets/assets/numbers/29.png": "aa6ab909dcf1b6f902d7a3a99789dcef",
"assets/assets/numbers/3.png": "dee2b2e7d8d5a028ccc02ca56d5559a6",
"assets/assets/numbers/30.png": "b3540f46bbb6ded79fd4e80779e2875a",
"assets/assets/numbers/4.png": "c6c7a125f13f99e6dff095677bd1622c",
"assets/FontManifest.json": "d0b57ba32c8d51f271b2ca7fa3731958",
"assets/fonts/MaterialIcons-Regular.otf": "cfb949de5bf6691ba9d2022e62f8bbbb",
"assets/NOTICES": "8620c90263cefe87adbcc79907749082",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "968d44848cd30c0fd5e2ee193a283133",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4d80b6f0f2b7dcc4dc0f2c9c6a569a44",
"icons/Icon-192.png": "48f655d2777d656d3be4624df2b17380",
"icons/Icon-512.png": "524f2d8cebbc5c7d25b1c316a467dacd",
"icons/Icon-maskable-192.png": "48f655d2777d656d3be4624df2b17380",
"icons/Icon-maskable-512.png": "524f2d8cebbc5c7d25b1c316a467dacd",
"index.html": "e824362906f01cade9400fb8658f4251",
"/": "e824362906f01cade9400fb8658f4251",
"main.dart.js": "9c019ec3eec09f076d8bf2887bd84989",
"manifest.json": "09819be418fa3941acdfb8edb945dcd3",
"version.json": "faaf38eb5ddb0bc452071bba082baeb8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
