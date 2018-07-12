(function() {
  'use strict';

  var CACHE_NAME = 'kain-tenun-sasak';
	var urlsToCache = [
	'.',
		  'assets/css/style.css',
		  'assets/css/bootstrap.min.css',
		  'assets/css/bootstrap-theme.min.css',
		  'assets/css/plugins.css',
		  'assets/css/lora-web-font.css',
		  'assets/css/opensans-web-font.css',
		  'assets/css/magnific-popup.css',
		  'assets/css/responsive.css',
		  'assets/font/material-design-icons/Material-Design-Icons.woff',
		  'assets/font/material-design-icons/Material-Design-Icons.ttf',
		  'assets/images/ficture/icon1.jpg',
		  'assets/images/ficture/icon1.jpg',
		  'assets/images/portfolio/keker.jpg',
		  'assets/images/portfolio/motif_keker_4.jpg',
		  'assets/images/portfolio/keker_5.jpg',
		  'assets/images/portfolio/leapng_1.jpg',
		  'assets/images/portfolio/lepang_2.jpg',
		  'assets/images/portfolio/lepang_3.jpg',
		  'assets/images/portfolio/nanas.jpg',
		  'assets/images/portfolio/nanas_1.jpg',
		  'assets/images/portfolio/nanas_3.jpg',
		  'assets/images/portfolio/subahanale.jpg',
		  'assets/images/portfolio/subahanale_1.png',
		  'assets/images/portfolio/subahanale_2.png',
		  'index.html',
		  'assets/js/materialize.min.js',
		  'assets/js/materialize.js',
		  'assets/page/offline.html',
		  'assets/page/404.html'
	];
	self.addEventListener('install', function(event) {
	event.waitUntil(
	caches.open(CACHE_NAME)
	.then(function(cache) {
	return cache.addAll(urlsToCache);
	})
	);
	});


	self.addEventListener('fetch', function(event) {
	event.respondWith(
	caches.match(event.request)
	.then(function(response) {
	return response || fetchAndCache(event.request);
	})
	);
	});
	function fetchAndCache(url) {
	return fetch(url)
	.then(function(response) {
	// Check if we received a valid response
	if (!response.ok) {
	throw Error(response.statusText);
	}
	return caches.open(CACHE_NAME)
	.then(function(cache) {
	cache.put(url, response.clone());
	return response;
	});
	})
	.catch(function(error) {
	console.log('Request failed:', error);
	// You could return a custom offline 404 page here
	});
}
}) ();
	

