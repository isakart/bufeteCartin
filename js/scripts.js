$(document).ready(function(){
    
  
 // Navbar anchor changes
    
	$(".nav a").on("click", function(){
	    $(".nav").find(".active").removeClass("active");
	    $(this).parent().addClass("active");
	});
	
	
// Mousewheel scrolling
	
	
	$(".container").onepage_scroll({
	  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	  easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
					    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
	  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	  keyboard: true,                  // You can activate the keyboard controls
	  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
					    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
					    // the browser's width is less than 600, the fallback will kick in.
	  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

	$("#scroll>li>a").click(function(){
	    $(".container").jumpTo($(this).data("target"));
	});
	
    
    
//    Google Map
var var_map;
var var_location = new google.maps.LatLng(9.9492747, -84.0512574,15);
	
     function map_init() {		 	
			
            var var_mapoptions = {
              center: var_location,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
            };
            var_map = new google.maps.Map(document.getElementById("map_container"),
                var_mapoptions);
      
          var contentString = 
				'<div id="mapInfo" style="font-size: 8px;">'+
				'<p style="font-size: 8px;"><strong>Bneinoaj Costa Rica</strong><br><br>'+
				'Guadalupe centro<br>' +
				'San Jose<br>Costa Rica<br>'+
				'Tel&eacute;fono: (+506) 8338 - 0084</p>'+
				'<a href="https://www.youtube.com/user/OR7Noajidas" target="_blank">Visite nuestro canal de youtube</a> <br>'+
              '<a href="https://www.facebook.com/Jabadnik?fref=ts" target="_blank">Visitenos en Facebook</a>'+
				'</div>';
 
          var var_infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          
          var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Click for information about the Guggenheim museum in Venice",
                  maxWidth: 200,
                  maxHeight: 200
          });
 
          google.maps.event.addListener(var_marker, 'click', function() {
             var_infowindow.open(var_map,var_marker);
          });
      }
 
          google.maps.event.addDomListener(window, 'load', map_init);
      
    
}); 





