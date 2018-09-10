self.addEventListener('install', function(event){
	console.log('Installed');
	event.waitUntil(
		caches.open('rrcv1').then(function(cache) {
		console.log('Service Worker Caches');
		return cache.addAll([ 
				'/',
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
    			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
  				]);
		})  
	);
});



self.addEventListener('activate', function(event) {
  console.log('Activated');
});


self.addEventListener('fetch', function(event) {
  console.log('Fetching..');
  event.respondWith(
  	caches.match(event.request).then(function(response)	{
  		if (response) return response;
  		return fetch(event.request);
  	})
  	);
});