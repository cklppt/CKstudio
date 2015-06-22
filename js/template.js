/* 
CKstudio website
Author:Kuan-Lin Chiu

Original template: Worhty by HtmlCoder - http://htmlcoder.me
File Description: Initializations of plugins 
*/

(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch([
			"images/banner/banner.jpg"
			, "images/banner/banner1.jpg"
			, "images/banner/banner2.jpg"
			, "images/banner/banner3.jpg"
			, "images/banner/banner4.jpg"
			, "images/banner/banner5.jpg"
			, "images/banner/banner6.jpg"
			, "images/banner/banner7.jpg"
			// , "images/banner/banner8.jpg"
			// , "images/banner/banner9.jpg"
			// , "images/banner/banner10.jpg"
			], {duration: 3000, fade: 750});
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-150
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}


		// Map

		countries = ['BE',// 	Belgium 1
				 	'JP',// 	Japan 2
				 	'LU',// 	Luxembourg 3
					'GR',// 	Greece 4
					'GB',// 	United Kingdom 5
					'HU',// 	Hungary 6
					'EE',// 	Estonia 7
					'ES',// 	Spain 8
					'MY',// 	Malaysia 9
					'FR',// 	France 10
					'FI',// 	Finland 11
					'NL',// 	Netherlands 12
					'NO',// 	Norway 13
					'NZ',// 	New Zealand 14
					'CH',// 	Switzerland 15
					'CN',// 	China 16
					'CZ',// 	Czech Rep 17
					'SE',// 	Sweden 18
					'DE',// 	Germany 19
					'AT',// 	Austria 20
					'US',// 	United States 21
					'TW',// 	Taiwan 22
					'AE',// 	United Arab Emirates 23
					'IT',// 	Italy 24
					'AU',// 	Australia 25
					'IE',// 	Ireland 26
					'VA',//     Vatican 27
					'SG'//		Singapore 28
					];
		cities = [
			{latLng: [50.850340, 4.35171], name: 'Bruxelles'},
			{latLng: [35.689487, 139.691706], name: 'Tokyo'},
			{latLng: [35.011636, 135.768029], name: 'Kyoto'},
			{latLng: [49.815273, 6.129583], name: 'Luxembourg'},
			{latLng: [37.983917, 23.72936], name: 'Athens'},
			{latLng: [39.721391, 21.633613], name: 'Meteora'},
			{latLng: [36.393156, 25.461509], name: 'Santorini'},
			{latLng: [51.507351, -0.127758], name: 'London'},
			{latLng: [52.205337, 0.121817], name: 'Cambridge'},
			{latLng: [47.497912, 19.040235], name: 'Budapest'},
			{latLng: [59.436961, 24.753575], name: 'Tallinn'},
			{latLng: [39.469907, -0.376288], name: 'Valencia'},
			{latLng: [40.416775, -3.70379], name: 'Madrid'},
			{latLng: [40.070392, -2.137416], name: 'Cuenca'},
			{latLng: [41.385064, 2.173403], name: 'Barcelona'},
			{latLng: [3.139003, 101.686855], name: 'Kuala Lumpur'},
			{latLng: [48.856614, 2.352222], name: 'Paris'},
			{latLng: [45.764043, 4.835659], name: 'Lyon'},
			{latLng: [48.636063, -1.511457], name: 'Mont Saint Michel'},
			{latLng: [60.173324, 24.941025], name: 'Helsinki'},
			{latLng: [52.370216, 4.895168], name: 'Amsterdam'},
			{latLng: [50.851368, 5.690973], name: 'Maastricht'},
			{latLng: [52.740178, 6.077978], name: 'Giethoorn'},
			{latLng: [58.969976, 5.733107], name: 'Stavanger'},
			{latLng: [-37.787001, 175.279253], name: 'Hamilton'},
			{latLng: [46.947922, 7.444608], name: 'Bern'},
			{latLng: [47.050038, 8.308929], name: 'Luzern'},
			{latLng: [25.606486, 100.267638], name: 'Dali'},
			{latLng: [29.714748, 118.337621], name: 'Huangshan'},
			{latLng: [30.274085, 120.15507], name: 'Hangzhou'},
			{latLng: [27.829743, 99.700836], name: 'Shangrila'},
			{latLng: [50.075538, 14.4378], name: 'Praha'},
			{latLng: [48.812735, 14.317466], name: 'Cesky Krumlov'},
			{latLng: [59.329323, 18.068581], name: 'Stockholm'},
			{latLng: [50.737430, 7.098207], name: 'Bonn'},
			{latLng: [50.775346, 6.083887], name: 'Aachen'},
			{latLng: [48.135125, 11.581981], name: 'Munich'},
			{latLng: [48.208174, 16.373819], name: 'Wien'},
			{latLng: [47.809490, 13.05501], name: 'Salzburg'},
			{latLng: [37.774929, -122.419416], name: 'San Francisco'},
			{latLng: [37.871593, -122.272747], name: 'Berkeley'},
			{latLng: [25.032969, 121.565418], name: 'Taipei'},
			{latLng: [22.627278, 120.301435], name: 'Kaohsiung'},
			{latLng: [25.204849, 55.270783], name: 'Dubai'},
			{latLng: [41.902783, 12.496366], name: 'Rome'},
			{latLng: [43.769560, 11.255814], name: 'Firenze'},
			{latLng: [45.440847, 12.315515], name: 'Venezia'},
			{latLng: [38.115688, 13.361267], name: 'Palermo'},
			{latLng: [-31.953513, 115.857047], name: 'Perth'},
			{latLng: [-35.023823, 117.884729], name: 'Albany'},
			{latLng: [53.349805, -6.26031], name: 'Dublin'},
			{latLng: [41.902916, 12.453389], name: 'Vatican City'},
			{latLng: [1.352083, 103.819836], name: 'Singapore'},
			{latLng: [22.396428, 114.109497], name: 'Hong Kong'},
			{latLng: [50.937531, 6.960279], name: 'Cologne'},
			{latLng: [51.227741, 6.773456], name: 'Dusseldorf'},
			{latLng: [47.558333, 10.741667], name: 'Hohenschwangau'},
			{latLng: [43.212161, 2.353663], name: 'Carcassonne'},
			{latLng: [39.862832, -4.027323], name: 'Toledo'},
			{latLng: [51.209348, 3.2247], name: 'Bruges'},
			{latLng: [55.953252, -3.188267], name: 'Edinburgh'},
			{latLng: [34.693738, 135.502165], name: 'Osaka'},
			{latLng: [36.719903, 139.698216], name: 'Nikko'},
			{latLng: [35.232355, 139.106937], name: 'Hakone'},
			{latLng: [35.513830, 24.018037], name: 'Chania'},
			{latLng: [45.465422, 9.185924], name: 'Milano'},
			{latLng: [47.368650, 8.539183], name: 'Zurich'},
			{latLng: [51.050409, 13.737262], name: 'Dresden'},
			{latLng: [53.551085, 9.993682], name: 'Hamburgh'},
			{latLng: [31.230416, 121.473701], name: 'Shanghai'},
			{latLng: [24.880095, 102.832892], name: 'Kunming'},
			{latLng: [52.011577, 4.357068], name: 'Delft'},
			{latLng: [57.477773, -4.224721], name: 'Inverness'},
			{latLng: [56.682560, -5.102271], name: 'Glencoe'},
			{latLng: [57.412474, -6.196023], name: 'Portree'},
			{latLng: [57.535926, -6.226273], name: 'Isle of sky'},
			{latLng: [57.423461, -6.788262], name: 'Neist Point'}
			];

		$('#world-map').vectorMap({
			map: 'world_mill_en',
			scaleColors: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial',
			hoverOpacity: 0.7,
			hoverColor: false,
			markerStyle: {
				initial: {
					fill: '#F8E23B',
					stroke: '#383f47'
				}
			},
			regionStyle: {
				selected: {
    				fill: '#339BEB'
			  	}
			},
			zoomOnScroll: false,
			backgroundColor: 'rgba(0, 0, 0, 0)',
			selectedRegions : countries,
			markers: cities
		});

	}); // End document ready
})(this.jQuery);