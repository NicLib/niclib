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
	
	//Add Bootstrap Classes to .NicLib-Head
	$('.NicLib-Head ul').addClass('col-md-12');
	$('.NicLib-Head li').addClass('col-md-3');

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
	//$('.footer3 input').css('width', '100%').attr('data-original-title', '');
	//$('.mainContent form .form-search').css('width', '100%').attr('data-original-title', '');

	function revealNav(){
		console.log($(this));
	}

	function dynamicHeight(menu){
		var heightnow = menu.height();
		var heightfull = menu.css({height: 'auto'}).height();
		menu.css({height:heightnow}).animate({height: heightfull}, 400);
	};

	//Navigation actions
	$('.NicLib-Head a').click(function(event){
		event.preventDefault();
		var menu = $(this);
		var hiddenMenu = menu.parents('.NicLib-Head').next();
		var menuSelected = '.' + menu.text().toLowerCase() + 'Menu';

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
		dynamicHeight(hiddenMenu);
	})/*.mouseenter(function(){
		//Below code is the same as the 'click' function
		var menu = $(this);
		var hiddenMenu = menu.parents('.NicLib-Head').next();
		var menuSelected = '.' + menu.text().toLowerCase() + 'Menu';
		if($(hiddenMenu).css('display')=='none'){
			$(hiddenMenu).slideDown();
		}
		for(var i in allMenus){
			$(allMenus[i]).css('display', 'none');
		};
		$(menuSelected).css('display','block');
		dynamicHeight(hiddenMenu);
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
	
	//Make WorldCat searches open in new tab on submit
	$('#catSearch').submit(function(e){
        e.preventDefault();
        var query = $('input[name=queryString]').val();
        $(e.target).attr('target', '_blank');
        $(e.target).children('input[name=queryString]').attr('value', query);
		console.log(e.target);
        e.target.submit();
    });
});
