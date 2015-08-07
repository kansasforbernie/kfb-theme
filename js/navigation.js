/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */
// @codekit-prepend "headroom.min.js";
// // @codekit-prepend "jQuery.headroom.min.js";

(function( $ ){

	// initialise
	$("#site-navigation").headroom({
		"offset": 100,
		"tolerance": 10,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
  	}); 


	$('#site-navigation').on( 'click', '.menu-toggle', function(){

		if ( ! $('#site-navigation').hasClass('open') ){
			$('#site-navigation').addClass('open');
			$('.menu-toggle span').html( 'Close Menu' );
			$('.menu-toggle i').removeClass('fa-bars').addClass('fa-times');
		} else {
			$('#site-navigation').removeClass('open');
			$('.menu-toggle span').html( 'Menu' );
			$('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
		}
	});
	$('#primary').on('click', function(){
		if ( $('#site-navigation').hasClass('open') ){
			$('#site-navigation').removeClass('open');
			$('.menu-toggle span').html( 'Menu' );
			$('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
		}
		if ( $('#secondary').hasClass('open') ){
			$('#secondary').removeClass('open');
			$('.sidebar-toggle span').html( 'News' );
			$('.sidebar-toggle i').removeClass('fa-times').addClass('fa-newspaper-o');
		}
	});

	$(document).keyup(function(e) {
     if (e.keyCode == 27 && ( $('#site-navigation').hasClass('open') ) || $('#secondary').hasClass('open') ) { // escape key maps to keycode `27`
       $('#secondary').removeClass('open');
       $('.sidebar-toggle span').html( 'News' );
       $('.sidebar-toggle i').removeClass('fa-times').addClass('fa-newspaper-o');
       $('#site-navigation').removeClass('open');
       $('.menu-toggle span').html( 'Menu' );
       $('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
    }
});


	$('#secondary').on( 'click', '.sidebar-toggle', function(){

		if ( ! $('#secondary').hasClass('open') ){
			$('#secondary').addClass('open');
			$('.sidebar-toggle span').html( 'Close News' );
			$('.sidebar-toggle i').removeClass('fa-newspaper-o').addClass('fa-times');
		} else {
			$('#secondary').removeClass('open');
			$('.sidebar-toggle span').html( 'News' );
			$('.sidebar-toggle i').removeClass('fa-times').addClass('fa-newspaper-o');
		}
	});

})( jQuery );
