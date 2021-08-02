$(document).ready(function(){
	// Mobile Menu
	$('.header_left a i').click(function(){
		$('.footer_left_right').slideToggle();

		return false
	});

	// Projects H1 Responsive
	$('.project_h1_pos_rel,.project_h1_pos_rel2,.project_h1_pos_rel3').click(function(){
		$('.projects_footer').show();

		return false
	});
	$('.projects_footer_respon_img2 img').click(function(){
		$('.projects_footer').hide();

		return false
	});

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });





});