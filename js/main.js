jQuery(document).ready(function($){
	$('.NicLib-Head a').click(function(event){
		event.preventDefault();
		var str = String($(this).val());
		var menu = str.toLowerCase();
		//Creates 'Hidden Menu' to open
		if($(this).parents('.NicLib-Head').next().css('display') == 'none'){
			$(this).parents('.NicLib-Head').next().slideDown();
			//Code to cause clicked on menu to open
			$(this).parents('.NicLib-Head').next().find('.' + menu + 'Menu').toggle();
		} else {
			//code to keep 'Hidden Menu' open but open newly clicked on menu
			console.log('already open');
		}
		/*if($(this).val() == 'About'){
			$('.aboutMenu').toggle();
		} else if ($(this).val() == 'Services'){
			$('.servicesMenu').toggle();
		} else if ($(this).val() == 'Collections'){
			$('.collectionsMenu').toggle();
		} else if ($(this).val() == 'Help') {
			$('.helpMenu').toggle();
		};*/
	});
	//Causes 'Hidden Menu' to close
	$('.hiddenMenu i').click(function(){
		$(this).parents('.hiddenMenu').slideUp();
	});
	$('.secondButtons p:first-child').append('<br/><i class="glyphicon glyphicon-question-sign"></i>').click(function(){
		//Custom script for opening a window for Library H3lp
		window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324', 'AskUs', 'resizable=1,width=500,height=500')
	});
	$('.secondButtons p:nth-child(2)').append('<br/><i class="glyphicon glyphicon-book"></i>');
	$('.secondButtons p:nth-child(3)').append('<br/><i class="glyphicon glyphicon-education"></i>');
});	