'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "e5de45137beb7a55e636732d47a9e44b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e99dae3220e86623a35179039f983775",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97dabadebd9b280dfc25dda34f45dbb3",
".git/logs/refs/heads/master": "97dabadebd9b280dfc25dda34f45dbb3",
".git/logs/refs/remotes/origin/HEAD": "9369947d623251dfa9763abc8e07c6f4",
".git/logs/refs/remotes/origin/master": "d64c035f4bf0853432234eb2df3babec",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/a66180167870269d7683321468cd932adb5e11": "3b56a2a1e75777885ee9ac78671ede7a",
".git/objects/0c/b2549bb3af718cfeba47b9ae98fbdfc1c5588c": "1ec3dd5e0e30ae2a8f260ed38ea1c9b8",
".git/objects/12/df52999883ece5743a5c87278937bef5565b49": "71bbe22f38864b0120fb478539d39140",
".git/objects/1a/468493be5a1aaa1038bf1c2d5f73c432997ea8": "f209336930a3f557e79a1d9880716526",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/311c6b3fcf37676092469da41e90bd7316ae0b": "215c6ae8561b9272550e3d163b87629b",
".git/objects/1b/d2f8627126a7262ee0760537c02e148ff3733b": "6b12fe02b6e0f61bca898808d29d74c0",
".git/objects/1c/41b9a420d176a391b2490dbed06262c775e8e4": "17da0accf038860fd7c318b8ee07d6db",
".git/objects/1c/5cf6b164cd0297f2a42d08961edfc1fe53a232": "d2b37afe0fdc143aea50f3fe86f52445",
".git/objects/1d/9b2c83edd29b8a8131b8d0f924ab0de45035db": "f12178bea876a887a4eab46f7c75c67c",
".git/objects/23/598789fcb7d6bbd57fdb7fd5c282ee10bdda41": "99c238e5ad76ad0d6050e410f02d8d5f",
".git/objects/29/82626d7bc73ee8db61fa941171611b56cefb44": "b611de5a18d758b0ecf3bfbeb39b5874",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/5263f081a5d23669a89ee1a294e7bf39bcd82d": "61121a45d03fbb6a74695662da4bdb31",
".git/objects/38/ad914e1d3934223ecaa2ef0edbf2b8eafc8b3a": "3d0be444123680c472cc3601149fabc6",
".git/objects/3a/b0df171f6d61f4ceea7f0eae67a85610e89348": "a02ca3fcd91e0098856b54761431f9d4",
".git/objects/3d/287fe6e38f2175de4dad1272b5b516def37f27": "78934bd183c58f3a262ed926412bd3fc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/d9649e85014c7d0a4e9ab0b20e076b6eb4c8d5": "93527e2cf3fb266c53d975caf3c00ad1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e527869d5848d04082bd25f72d54368a715dff": "95ead34d4a794fd0c6400320ea17eae9",
".git/objects/4c/f09a53a85274aefa15266bb969c3f6c5d79459": "4571ecbd3cc2b275221c6f52272e1107",
".git/objects/4e/c90de9edb8db363a11e05ed4a526f60e3888f4": "0ec4db990d54f2d3f2e11ea254803422",
".git/objects/55/1a753ae0abe92affaa6b64ef1a6f8167ce4200": "34031a2a82ddb22cec13487c16248bf2",
".git/objects/5c/2118a0800358bcd75859eea359b2f7bd6c54d4": "c4d2516a50d369cb3ebc12edbad48792",
".git/objects/5c/873a4300c3a59e8dbba50e014dabae36267e64": "ce7f196cfb291e422d509e84e532d271",
".git/objects/5e/59ce466d841206f5ac563f565c086597d5669a": "0ecffa9e6eabea33601f6fd986a257fe",
".git/objects/5f/e224e8d1f7a5f01743be1435da94c3ff73365d": "6d4ccb1fe99bc8e8f7b3eac61133acc0",
".git/objects/60/07e145afcae9bc6e159b539f52c1d4558734d4": "53e2b808303d3084ef43cabb864fb1ec",
".git/objects/62/d3ba7f3829e9efdb5791af7f194ad9e06f2e11": "e3683b68a840478be423d8023a54b79c",
".git/objects/6e/4535970e16c5e4732333e1a52bb2c1a74dc477": "3f2305fe18c95f7281172955e5498bc0",
".git/objects/72/3dbe09c4db37ed9cbd52be12acc64e9cae9a16": "250de041725a2bb5fb2e74d0a662aaf9",
".git/objects/77/aa79d6260de817738b91b40fb98fcf934d88c3": "be095cadfd5bbfd4f88f8f665088c3a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b186c3e9f9e710e78f30ca831a398e1d6e706f": "cb4c415c402f97b2da697208ab274388",
".git/objects/7c/847296c6f8680a69ee3de8c35a8ffa623278e3": "b7e504c06e9a6223d2bc50dd5afe0e4a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/b1f248a038f4d46beab1d09aa384fa89457c07": "569507259cd03627a6cbf80b59a36b77",
".git/objects/7f/23600779d3b00191be148fa440713812d322a1": "b5fc64f50e99670ca53273f76a8394df",
".git/objects/81/9344e173f5f9a54de2143725dd3d27e9c47bca": "c7242ea52f1b0b08decbcd8c52fb2987",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/054aa1b680a2fadad38d31ae01c1e8c569d340": "4cfc04f2399a91cf11d26da7ea81784d",
".git/objects/8d/0a32d6b8b231fb4b8c9bddc6404e883646c3e0": "0a773465aa7b3a662ce272385b189000",
".git/objects/90/c43eafe45f0f602af998a825512dfbd6e3c9cf": "87340d00ee590e9cb9ddb1f56f6081ce",
".git/objects/94/377bcdd3fd4a5dc3f2e8e0f8bb978606f7a7d8": "e4e5625a32f4f218273a4693a7df3ee4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/189edc002e43a3f5e65e9fc649f95bcf4f00a8": "bb44242cd80d00ab9587347d8824a0d7",
".git/objects/9c/83863f55b35f3dd8e8662d39b7247b4029d8d6": "83d7657e7a3c1cfce7bed0861e95874e",
".git/objects/9f/e77d26fedabdf07087fb9a9f767c6283b015d0": "572461578201221e7966922d2bc839cc",
".git/objects/a0/d04bfa5b148f3413dbcace955c3a4833ca5985": "640d82d93f978a88d2bfb224abc3f5b5",
".git/objects/a0/f14a3dc7e1c1f073bb0d264f955e1a2a2ab7c5": "a3e741eb03faf99834736ee55ffc8672",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/db2d21a13b80495243872a2b92befcb2c80536": "6cc334f5e4f95b102f4feb0324a9d324",
".git/objects/a9/f252ed43b20cc3efcf1e2284db46ed2ef3a5cf": "599205260b67f53d131ae009bbe4093c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/85a4fca60d31730e0852d0953f44579df97439": "629291d7172fe84e217195caf1ed4a2e",
".git/objects/ae/57834c27732c9ddab7368db9a415f1f3cf8e32": "d6024e1e386e7fbfe11b08b586b03221",
".git/objects/af/88783a29ac49e245288f6c91a35af4ff6473ff": "4b4749a6fc73e77694a52e4cbe3d6a36",
".git/objects/b3/c76aafcebe598b84905e07ce805e2ee3e1dda4": "64460c1a39fb46b4dfc340a4e7f3a9de",
".git/objects/b3/d4d4925c72942e6c73351f7b0ae5551eee28fa": "47140d6fb8a38ca5b7d3beb0ba7ba065",
".git/objects/b4/1057b8aac6fd97fe10a297205751be2d636b31": "2bda4e0b8871f1aa75a6de37dba4809f",
".git/objects/b6/5794da150fcea3861ccaa4741d08bf04e8f030": "b6915d364da1f74c6348970e5c1faa33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/a918635bb708559dd2cb94e295dea76c9fe47b": "09a40b2111702205656775c6dcd67d32",
".git/objects/c4/d1581ee5ea529bdb34d662b3761f1ef37c1a51": "1d2042801c9b53445dbb897e3c86a095",
".git/objects/c5/a86af413756acbaa7339e267a59f459ed25ffa": "e2e7d77b53a38a4050d477d2d3faad0a",
".git/objects/ca/41e7816d7ae0c1701383725add183b98206d3d": "8a5e039b697926168d7de75a9bbd2a1a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/29457516d82b2760a3d3ec440c2d135a0a2a8e": "75f81ad549f3ec8ad5ec5e4cf8f0cef6",
".git/objects/cd/53fb3839258b293fedb6fa960cd1dd9db12ee8": "627b829275eb6ab7a5367d170e1acae8",
".git/objects/ce/74042e0f3327229106291435ee51c7ad4b5746": "3ee001e78460373754b9d63f8e1f3f58",
".git/objects/d2/903b9b1f5e6ec3d6f5e94197de742b5230fbf2": "81f52b0f095e9368c0bf373ff102d34f",
".git/objects/d2/c00a55fed69ae26e16dda1932d92b723da9a7f": "616853fbc92d63ec0e147c9fef321df6",
".git/objects/d6/26f7c4a7e0bb1c462f381f3504d6c608b649e5": "da32077f97857e95051a584088631175",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/84c8e37042e6cc696c83d388bf2c1b6400c947": "63f9c8755bd046a60e025a5fce738076",
".git/objects/d9/0f80fc93c6a8bec881a628f2568d4efae21542": "a7b1487b6a0e073d926cc7f16231b72f",
".git/objects/dc/4ec40694e26e2cdabc69fa338b0585754f3a74": "ef7de709dfc199b235c05d28514b586f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7601b50f1d62c97bea4704672c226f010553d9": "1f2a6016346c392edc51895cd95a8bc0",
".git/objects/f3/0583989993e3a2ceadec09a49170a2a29f2c67": "c40a4982087ff7afee48a686f97a31e8",
".git/objects/f9/6695c3f9455f2e177579dd75967a4d35c4650e": "2a5388859d87255f4a353a5dcb4da426",
".git/objects/f9/a146f8450896b30f883ea3379e49a22013215b": "dc11d0553b6983b0f3f6040a35d2581d",
".git/objects/fb/9315aa1d1bdda692d0bd8211748fef30aad09d": "e6a8ce830834738d3a363a703c3f5fc1",
".git/objects/ff/0dd91209e98309cc74a45e9d8fc137d821a33f": "0aa614b5baee9357b88367c6b451080a",
".git/refs/heads/master": "0362bd721fe362fd0d9d7af19ef22fb0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "0362bd721fe362fd0d9d7af19ef22fb0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e6c1e47612a76672356e301467e6d911",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "eed500c8d3c6ac738d151372b3428bcf",
"firebase-messaging-sw.js": "84fde9b52a64e603a53bbd5705ce35c2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "a03a896ce92fe6d9edd03164c73a5084",
"icons/Icon-512.png": "48eb6694c50c487378a8fcfb2ea08b7a",
"icons/Icon-maskable-192.png": "a03a896ce92fe6d9edd03164c73a5084",
"icons/Icon-maskable-512.png": "48eb6694c50c487378a8fcfb2ea08b7a",
"index.html": "c0c89cb2aa0c78d3897d67854b7d3103",
"/": "c0c89cb2aa0c78d3897d67854b7d3103",
"main.dart.js": "ebbb82f0894bfb2146b44daa3279884e",
"manifest.json": "c4f149015699761d313e82b69019d9e5",
"version.json": "573680fa9ba1c6d6100d11c5dcbf2aef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
