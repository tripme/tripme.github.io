/**
* jquery
* https://jquery.com
*/


/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/


/**
* parallax.js
* https://github.com/pixelcog/parallax.js
*/


/**
* isotope with imagesloaded 
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
var $container = $('.isotope-container');
$(document).ready(function() {
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.isotope-item',
			layoutMode: 'fitRows',
		});
	});
});


