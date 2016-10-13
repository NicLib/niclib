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
	//Make external links open in a new tab
	$("a[href^='http://']").attr('target', '_blank');
	$("a[href^='https://']").attr('target','_blank');
	
	//Adds links to 'secondButtons'
	$('.secondButtons p:first-child').click(function(){
		//Custom script for opening a window for Library H3lp
		window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324', 'AskUs', 'resizable=1,width=500,height=500')
	});
	$('.secondButtons p:nth-child(2)').click(function(){
		window.open('http://libguides.anderson.edu/c.php?g=500884', '_blank');
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
			$(hiddenMenu).css({height:heightnow}).animate({height: heightfull}, 400);
		};
		
		//Causes dynamic menu sizes to change smoothly
		if($(hiddenMenu).css('display')=='none'){
			$(hiddenMenu).slideDown();
		};
		
		//Causes 'Menu Links' to appear one at a time
		for(var i in allMenus){
			$(allMenus[i]).css('display', 'none');
		};
		$(menuSelected).css('display','block');
		
		//Function found from StackOverflow user Popnoodles
		//link "http://jsfiddle.net/zbB3Q/"
		dynamicHeight();
	})/*.mouseenter(function(){
		//Below code is the same as the 'click' function
		var menu = $(this);
		var hiddenMenu = menu.parents('.NicLib-Head').next();
		var menuSelected = '.' + menu.text().toLowerCase() + 'Menu';
		function dynamicHeight(){
			var heightnow = $(hiddenMenu).height();
			var heightfull = $(hiddenMenu).css({height: 'auto'}).height();
			$(hiddenMenu).css({height:heightnow}).animate({height: heightfull}, 400);
		};
		if($(hiddenMenu).css('display')=='none'){
			$(hiddenMenu).slideDown();
		} 
		for(var i in allMenus){
			$(allMenus[i]).css('display', 'none');
		};
		$(menuSelected).css('display','block');
		dynamicHeight();
	})*/;
	
	//Causes 'hiddenMenu' to close on mouse out
	$('.NicLib-Head').parents('.row').mouseleave(function(){
		//console.log('did this work');
		if($(this).find('.hiddenMenu').css('display')=='block'){
			$('.hiddenMenu').slideUp();
		}
	});
	
	//Causes 'hiddenMenu' to close
	$('.hiddenMenu i').click(function(){
		$(this).parents('.hiddenMenu').slideUp();
	});
	
	//Function for Tabs in Searchbox
	$('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
 
		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).show().siblings().hide();
 
		// Change/remove current tab to active
		//jQuery(this).closest('h2').addClass('active').siblings().removeClass('active');
		$('.tabs .tab-links a.selected').removeClass('selected');
		$(this).addClass('selected');
 
		e.preventDefault();
	});
			
	//retain search term input when switching tabs
	$('#query1').change(function(){
		$('.searchbox').val($('#query1').val());
	});
	$('#query2').change(function(){
		$('.searchbox').val($('#query2').val());
	});
	$('#query3').change(function(){
		$('.searchbox').val($('#query3').val());
	});
	$('#query4').change(function(){
		$('.searchbox').val($('#query4').val());
	});
	
	//Found at https://www.sitepoint.com/community/t/adding-removing-classes-on-resize-jquery/191805
	$(window).on("load", function(){
		var viewportWidth = $(window).width();
		if(viewportWidth < 200){
			$('.tab-links h2').removeClass();
		};
	});
	
	$('.windowForm').submit(function(e){
		// specify a unique target name
		var target = 'windowFormTarget';
		// open a new window and name it
		window.open('', target, 'width=500,height=300');
		// set the target of the form to be
		// the window name
		this.setAttribute('target', target);
		// allow the form to be submitted normally
	});
});	