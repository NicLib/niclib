var allMenus=['.servicesMenu','.collectionsMenu','.aboutMenu','.helpMenu'];function revealNav(){var el=document.getElementById('mobile-nav');if(el.style.display!='block'){el.style.display='block';}else{el.style.display='none';} console.log(el.style.display);};jQuery(document).ready(function($){$("a[href^='http://']").attr('target','_blank');$("a[href^='https://']").attr('target','_blank');$('.secondButtons p:first-child').click(function(){window.open('https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=26324','AskUs','resizable=1,width=500,height=500')});$('.secondButtons p:nth-child(2)').click(function(){window.open('http://libguides.anderson.edu/c.php?g=500884','_blank');});$('.secondButtons p:nth-child(3)').click(function(){window.open('/faculty','_self');});function revealNav(){console.log($(this));} function dynamicHeight(menu){var heightnow=menu.height();var heightfull=menu.css({height:'auto'}).height();menu.css({height:heightnow}).animate({height:heightfull},400);};$('.NicLib-Head a').mouseenter(function(){var menu=$(this);var hiddenMenu=menu.parents('.NicLib-Head').next();var menuSelected='.'+menu.text().toLowerCase()+'Menu';if($(hiddenMenu).css('display')=='none'){$(hiddenMenu).slideDown();} for(var i in allMenus){$(allMenus[i]).css('display','none');};$(menuSelected).css('display','block');dynamicHeight(hiddenMenu);});$('.NicLib-Head').parents('.row').mouseleave(function(){if($(this).find('.hiddenMenu').css('display')=='block'){$('.hiddenMenu').slideUp();}});$('.hiddenMenu i').click(function(){$(this).parents('.hiddenMenu').slideUp();});$('.tabs .tab-links a').on('click',function(e){var currentAttrValue=jQuery(this).attr('href');$('.tabs '+currentAttrValue).show().siblings().hide();$('.tabs .tab-links a.selected').removeClass('selected');$(this).addClass('selected');e.preventDefault();});$('#query1').change(function(){$('.searchbox').val($('#query1').val());});$('#query2').change(function(){$('.searchbox').val($('#query2').val());});$('#query3').change(function(){$('.searchbox').val($('#query3').val());});$('#query4').change(function(){$('.searchbox').val($('#query4').val());});});
