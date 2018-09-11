
var swAssets = ['/',
				'/index.html', 
				'/restaurant.html',
				'/css/styles.css',
  				'/js/main.js', 
  				'/js/restaurant_info.js', 
  				'/js/dbhelper.js',
  				'/img/1.jpg',
  				'/img/2.jpg',
  				'/img/3.jpg',
  				'/img/4.jpg',
  				'/img/5.jpg',
  				'/img/6.jpg',
  				'/img/7.jpg',
  				'/img/8.jpg',
  				'/img/9.jpg',
  				'/img/10.jpg', 
  				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    			'/service_worker.js',
    			'/README.md'
  				];

// Saving all Assets in the Cache v1
self.addEventListener('install', function(event){
	console.log('Installedv1');
	event.waitUntil(
		caches.open('rrcv1').then(function(cache) {
		console.log('Service Worker Caches');
		return cache.addAll(swAssets);
		})  
	);
});

// Saving all Assets in the Cache v2 to update service worker
self.addEventListener('install', function(event){
	console.log('InstalledUpdatev2');
	event.waitUntil(
		caches.open('rrcv2').then(function(cache) {
		console.log('Service Worker Caches Updates');
		return cache.addAll(swAssets);
		})  
	);
});

// Deleting old caches
self.addEventListener('activate', function(event) {
	console.log('Deleting old caches')
  var savedCache = ['rrcv2'];
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (savedCache.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// matching resources requested from the network and resources in the cache
self.addEventListener('fetch', function(event) {
  console.log('Fetching..');
  event.respondWith(
  	caches.match(event.request).then(function(response)	{
  		if (response) return response;
  		return fetch(event.request);
  	})
  	);
});