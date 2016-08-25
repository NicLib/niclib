var allMenus = ['.servicesMenu', '.collectionsMenu', '.aboutMenu', '.helpMenu'];
function revealNav(){
	var el = document.getElementById('mobile-nav');
	if(el.style.display != 'block'){
		el.style.display = 'block';
	} else {
		el.style.display = 'none';
	}
	
	console.log(el.style.display);
};

jQuery(document).ready(function($){
	//Adds links to 'secondButtons'
	$('.secondButtons p:first-child').click(function(){
		//Custom script for opening a window for Library H3lp
		window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324', 'AskUs', 'resizable=1,width=500,height=500')
	});
	$('.secondButtons p:nth-child(2)').click(function(){
		window.open('http://libguides.anderson.edu/c.php?g=500884', '_self');
	});
	$('.secondButtons p:nth-child(3)').click(function(){
		window.open('/faculty', '_self');
	});
	function revealNav(){
		console.log($(this));
	}
	
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
	})/*.mouseenter(function(){
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
	})*/;
	
	//Causes 'hiddenMenu' to close
	$('.hiddenMenu i').click(function(){
		$(this).parents('.hiddenMenu').slideUp();
	});
});	