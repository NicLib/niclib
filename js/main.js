jQuery(document).ready(function($){
	$('.NicLib-Head a').click(function(event){
		event.preventDefault();
		var menus = ['.servicesMenu', '.collectionsMenu', '.aboutMenu', '.helpMenu'];
		var menuSelected = $(this).text().toLowerCase();
		//Creates 'Hidden Menu' to open
		if($(this).parents('.NicLib-Head').next().css('display') == 'none'){
			$(this).parents('.NicLib-Head').next().slideDown();
		}
		//Causes 'Menu Links' to appear one at a time
		for(var i=0; i<menus.length; i++){
			$(menus[i]).css('display', 'none');
		}
		$('.' + menuSelected + 'Menu').css('display','initial');
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