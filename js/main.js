jQuery(document).ready(function($){
	$('.NicLib-Head a').click(function(event){
		event.preventDefault();
		$(this).parents('.NicLib-Head').next().toggle();
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
	$('.secondButtons p:first-child').append('<br/><i class="glyphicon glyphicon-question-sign"></i>').click(function(){
		//Custom script for opening a window for Library H3lp
		window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324', 'AskUs', 'resizable=1,width=500,height=500')
	});
	$('.secondButtons p:nth-child(2)').append('<br/><i class="glyphicon glyphicon-book"></i>');
	$('.secondButtons p:nth-child(3)').append('<br/><i class="glyphicon glyphicon-education"></i>');
});	