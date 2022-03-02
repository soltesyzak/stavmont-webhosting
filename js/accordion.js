$(document).ready(function() {
	$('.card-body#fading1').fadeIn();
	var	initial = $('.card-header#headingOne');
	var initFade = $('#fading1');
	var initRot = $('.card-header#headingOne').children('i');
	var initShadow = $('.card-header#headingOne').parent();

	$("button.btn").click(function(){

		var buttonClicked = $(this).attr('id');
		var idOfClicked = buttonClicked.charAt(3);
		console.log("Clicked "+buttonClicked +" "+ idOfClicked);

		var clickFade = $('#fading'+idOfClicked);
		console.log(clickFade);

		var header = $(this).parent();
		console.log(header);

		var boxShadow = $(this).parent().parent();
		console.log(boxShadow);

		var rotate = $(this).children('i');
		console.log(rotate);

		// var clicked100 = $(this).parent().parent();
		// console.log(clicked100);
		// $(clicked100).toggleClass('w-50');

		var clickedID = $(header).attr('id');
		var initID = $(initial).attr('id');
		console.log("clickedID "+clickedID+"\tand\tinitialID is "+initID);


		if(initID === clickedID) {
			console.log("clicked the same");
			$(header).toggleClass('opened-accordion-card');
			$(boxShadow).toggleClass('card-shadow');
			$(rotate).toggleClass('rotate');
			$(clickFade).fadeToggle();
		}

		else if ($(initial).hasClass('opened-accordion-card') === true) {
			console.log("clicked another, initial was opened ...");
			$(initFade).fadeOut();
			$(initial).removeClass('opened-accordion-card');
			$(initShadow).removeClass('card-shadow');
			$(initRot).removeClass('rotate');
			$(clickFade).fadeIn();
			$(header).addClass('opened-accordion-card');
			$(rotate).addClass('rotate');
			$(boxShadow).addClass('card-shadow');
		}

		else if ($(initial).hasClass('opened-accordion-card') === false){
			console.log("clicked another, initial was closed ...");
			$(clickFade).fadeIn();
			$(boxShadow).addClass('card-shadow');
			$(header).addClass('opened-accordion-card');
			$(rotate).addClass('rotate');
		}

		else {
			$(initFade).fadeOut();
			$(initial).removeClass('opened-accordion-card');
			$(initRot).removeClass('rotate');
			$(boxShadow).addClass('card-shadow');
			$(clickFade).fadeOut();
			$(header).removeClass('opened-accordion-card');
			$(rotate).removeClass('rotate');
		}

		initial = header;
		initFade = clickFade;
		initRot = rotate;
		initShadow = boxShadow;
    });
});