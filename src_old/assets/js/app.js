$(document).foundation();

//CCI SPECIFIC CODE GOES HERE

//LET'S START WITH THE MOBILE MENU
//OPEN
$('#cci-menu-open').on('click', function(e){
	e.preventDefault();
	$('.cci-off-canvas-menu').toggleClass('active').one('transitionend webkitTranstionEnd', function(){
			$('#cci-mobile-nav').addClass('fade-up');
			$('#cci-menu-close').toggleClass('active');
		});
	$('.cci-off-canvas-content').toggleClass('active');
	$('#cci-gala-header').toggleClass('active');
	$(this).toggleClass('open');
	
	
})
//CLOSE
$('#cci-menu-close').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active');//reset the menu button
	$('.cci-off-canvas-menu').toggleClass('active').one('transitionend webkitTranstionEnd', function(){
			
			$('#cci-mobile-nav').removeClass('fade-up');//reset the animation fot the nav elements
		
		});//hide the menu
	$('.cci-off-canvas-content').toggleClass('active');//reset the page content
	$('#cci-gala-header').toggleClass('active');//reset the header
	$('#cci-menu-open').toggleClass('open');//reset the menu toggle
	//$('#cci-mobile-nav a').removeClass('slide-up-fade');//reset the animation fot the nav elements
})

//handle clicks from the mobile menu

$('#cci-mobile-nav a').on('click', function(e){
	e.preventDefault();
	$('#cci-menu-close').toggleClass('active');
	$('.cci-off-canvas-menu').toggleClass('active').one('transitionend webkitTranstionEnd', function(){
		
			$('#cci-mobile-nav').removeClass('fade-up');//reset the animation fot the nav elements
		
		});//hide the menu
	$('.cci-off-canvas-content').toggleClass('active');//reset the page content
	$('#cci-gala-header').toggleClass('active');//reset the header
	$('#cci-menu-open').toggleClass('open');//reset the menu toggle
	
	
	//SCROLL TO THE DESIRED SECTION
	var sc = $(this).attr('class').split(" ")[1];
	var scrollTo = sc;
	
	var t = setTimeout(function(){
			$('#'+scrollTo).velocity("scroll", {duration : 1500, easing : "easeInOutCubic", offset:-70})
			clearTimeout(t);
		}, 1250)
	
})

//DESKTOP NAVIGATION========================================================================================

$('#desktopNav a').on('tap click', function(e) {
	e.preventDefault();
	
	var sc = $(this).attr('class').split(" ")[1];
	var scrollTo = sc;
	
	$('#'+sc).velocity("scroll", {duration : 1500, easing : "easeInOutCubic", offset:-70})
			
		
})


//RANDOM NUMBER GENERATOR
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//STORIES

function showStory(n) {
	//console.log(parseInt(n));
}

//TICKET PURCHASES

function buyTickets(url) {
	 window.open(url);
}

function bookNow(url) {
	 window.open(url);
}
function openLink(url) {
	window.open(url);
}



//CAROUSELS!!!!!
/*
// UNCOMMENT THIS LINE IF YOU WANT THE SPONSOR SCROLLER
$('#sponsorsSlick').slick({
	dots: true,
	slidesToShow : 5,
	slidesToScroll:5,
	prevArrow:"<button type='button' class='slick-prev'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-left.png'></button>",
    nextArrow:"<button type='button' class='slick-next'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-right.png'></button>",
	responsive : [
		
		{
			breakpoint:1024,
			settings : {
				slidesToShow : 5,
				slidesToScroll:5,
				infinite: true,
				arrows: true,
				dots : true
			}
		},
		{
			breakpoint:480,
			settings : {
				slidesToShow : 3,
				infinite: true,
				arrows: false,
				dots : true
			}
		}
	]
})
*/





//LOCATED IN THE EVENT INFO SECTION=========================================================================== 
$('#featureSlick').slick({
	dots : true,
	arrows: true,
	slidesToShow : 1,
	slidesToScroll : 1,
	prevArrow:"<button type='button' class='slick-prev'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-left-light.png'></button>",
    nextArrow:"<button type='button' class='slick-next'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-right-light.png'></button>",
    responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        arrows : false
	      }
	    }
    ]
})

//LOCATED IN THE GALLERY SECTION============================================================================
$('#gallerySlick').slick({
		dots : true,
		arrows:true,
		prevArrow:"<button type='button' class='slick-prev'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-left.png'></button>",
	    nextArrow:"<button type='button' class='slick-next'><img  src='https://cci-landing-pages.s3.amazonaws.com/tnt2017/assets/img/slick-right.png'></button>",
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        arrows : false
		      }
		    }
	    ]
	});
	


$('#gallerySlider').on('open.zf.reveal', function() {		
	
	setTimeout(function(){
			$('#gallerySlick').slick('setPosition'); 
		}, 500)
})



//WAYPOINTS================================================================================

var sections = document.getElementsByClassName('section');
//DOWN WAYPOINTS
for(var i=0; i < sections.length; i++) {
	
	var wp1 = new Waypoint({
		element : sections[i],
		handler : function(direction) {
			if(direction == "down") {
				//console.log("asdas");
				$('#desktopNav a').removeClass("inview");
				$('#desktopNav a.' + this.element.id).addClass("inview");
			}
		},
		offset : "50%"
	})
	
}
//UP WAYPOINTS
for(var i=0; i < sections.length; i++) {
	
	var wp2 = new Waypoint({
		element : sections[i],
		handler : function(direction) {
			if(direction == "up") {
				//console.log("asdas");
				$('#desktopNav a').removeClass("inview");
				$('#desktopNav a.'+ this.element.id).addClass("inview");
			}
		},
		offset : "0"
	})
	
}
//FIRST WAYPOINT SCROLLING UP
var wp3 = new Waypoint({
		element : document.getElementById('eventInfo'),
		handler : function(direction) {
			if(direction == "up") {
				//console.log("asdas");
				$('#desktopNav a').removeClass("inview");
			}
		},
		offset : "90%"
	})


//STORY WAYPOINTS================================================================================
var stories = document.getElementsByClassName('story');

for(var i=0; i < stories.length; i++) {
	var swp = new Waypoint({
		element : stories[i],
		handler : function(direction) {
			$(this.element).addClass('slide-n-fade');
			this.destroy();
		},
		offset : "60%"
		
	})
}

var story1 = new Foundation.Reveal($('#story_1'));
var story2 = new Foundation.Reveal($('#story_2'));
var story3 = new Foundation.Reveal($('#story_3'));

$('#openStory_1').on('click', function() {
	$('#story_1').foundation('open');
})

$('#openStory_2').on('click', function() {
	$('#story_2').foundation('open');
})

$('#openStory_3').on('click', function() {
	$('#story_3').foundation('open');
})

$('#closeStory_1').on('click', function() {
	$('#story_1').foundation('close');
})

$('#closeStory_2').on('click', function() {
	$('#story_2').foundation('close');
})

$('#closeStory_3').on('click', function() {
	$('#story_3').foundation('close');
})

var options = {multiExpand: true, allowAllClosed: false};
var accordion = new Foundation.AccordionMenu($('#sponsorLevels'));



