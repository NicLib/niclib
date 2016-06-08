var activeMenu = [];

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
		var hiddenMenu = $(this).parents('.NicLib-Head').next();
		var allMenus = ['.servicesMenu', '.collectionsMenu', '.aboutMenu', '.helpMenu'];
		var menuSelected = '.' + $(this).text().toLowerCase() + 'Menu';
		var activateMenu = function(selection){
			activeMenu = [];
			activeMenu.push(selection);
		};
		
		//Causes dynamic menu sizes to change smoothly
		if(activeMenu.length == 0){
			$(hiddenMenu).slideDown();
		} else if ($(activeMenu[0]).attr('height') != $(menuSelected).attr('height')){
			//This isn't working the way I want
				//Different jQuery function?
				//Something in the wrong order?
				//Not reading the DOM as anticipated?
			$(hiddenMenu).animate({'height':'100%'}, 'slow');
		};
		
		//Causes 'Menu Links' to appear one at a time
		for(var menu in allMenus){
			$(allMenus[menu]).css('display', 'none');
		};
		$(menuSelected).css('display','initial');
		
		//Bug Testing
		console.log(activeMenu);
		activateMenu($(menuSelected));
		console.log(activeMenu);
	});
	
	//Causes 'hiddenMenu' to close
	$('.hiddenMenu i').click(function(){
		$(this).parents('.hiddenMenu').slideUp();
	});
});	