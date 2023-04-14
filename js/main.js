
'use strict';

$(window).on('load', function() {
	/*---- Preloader -----*/
	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");
} );

(function ($) {
	/*toggle nav-switch-header section*/
	$('.nav-switch').on('click', function(event) {
		$(this).toggleClass('active');
		$('.nav-wrap').slideToggle(400);
		event.preventDefaule();
	});

	/* set background image-hero section */
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url('+ bg +')');
	});

} )(jQuery);

const myslide = document.querySelectorAll('.myslider'),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoslide, 8000);
}
function slidefun(n) {
	let i;
	for(i = 0; i<myslide.length; i++){
		myslide[i].style.display = "none";
	}
	for(i = 0; i<dot.length; i++){
		dot[i].classList.remove('active');
	}
	if(n> myslide.length){
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].clientList.add('active');
}
