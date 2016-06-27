var allMenus = ['.servicesMenu', '.collectionsMenu', '.aboutMenu', '.helpMenu'];

jQuery(document).ready(function($){
	//Adds Glyphicons to 'secondButtons'
	$('.secondButtons p:first-child').append('<br/><i class="glyphicon glyphicon-question-sign"></i>').click(function(){
		//Custom script for opening a window for Library H3lp
		window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324', 'AskUs', 'resizable=1,width=500,height=500')
	});
	$('.secondButtons p:nth-child(2)').append('<br/><i class="glyphicon glyphicon-book"></i>');
	$('.secondButtons p:nth-child(3)').append('<br/><i class="glyphicon glyphicon-education"></i>');
	
	//Navigation actions
	$('.NicLib-Head a').click(function(event){
		event.preventDefault();
		var menu = $(this);
		var hiddenMenu = menu.parents('.NicLib-Head').next();
		var menuSelected = '.' + menu.text().toLowerCase() + 'Menu';
		function dynamicHeight(){
			var heightnow = $(hiddenMenu).height();
			var heightfull = $(hiddenMenu).css({height: 'auto'}).height();
			$(hiddenMenu).css({height:heightnow}).animate({height: heightfull}, 500);
		};
		
		//Causes dynamic menu sizes to change smoothly
		if($(hiddenMenu).css('display')=='none'){
			$(hiddenMenu).slideDown();
		};
		
		//Causes 'Menu Links' to appear one at a time
		for(var i in allMenus){
			$(allMenus[i]).css('display', 'none');
		};
		$(menuSelected).css('display','initial');
		
		//Function found from StackOverflow user Popnoodles
		//link "http://jsfiddle.net/zbB3Q/"
		dynamicHeight();
	}).mouseenter(function(){
		//Below code is the same as the 'click' function
		//Need to refactor this into a function, but not sure how
		var menu = $(this);
		var hiddenMenu = menu.parents('.NicLib-Head').next();
		var menuSelected = '.' + menu.text().toLowerCase() + 'Menu';
		function dynamicHeight(){
			var heightnow = $(hiddenMenu).height();
			var heightfull = $(hiddenMenu).css({height: 'auto'}).height();
			$(hiddenMenu).css({height:heightnow}).animate({height: heightfull}, 500);
		};
		if($(hiddenMenu).css('display')=='none'){
			$(hiddenMenu).slideDown();
		};
		for(var i in allMenus){
			$(allMenus[i]).css('display', 'none');
		};
		$(menuSelected).css('display','initial');
		dynamicHeight();
	});
	
	//Causes 'hiddenMenu' to close
	$('.hiddenMenu i').click(function(){
		$(this).parents('.hiddenMenu').slideUp();
	});
	//Makes 'hiddenMenu' closes when the mouse exits no matter what
	//My preference is to only have this happen when clicking the 'x'
	//Commenting out until told different
	/*$('.hiddenMenu').mouseleave(function(){
		$(this).slideUp();
	})*/
});	