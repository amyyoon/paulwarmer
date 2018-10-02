(function($){

var gnbLeft=$('.gnb_left');
var gnbLeft1=gnbLeft.children('li:nth-of-type(2)');
var gnbLeft2=gnbLeft.children('li:nth-of-type(3)');
var menmenu=$('.menmenu');
var womenmenu=$('.womenmenu');


menmenu.hide();
womenmenu.hide();
gnbLeft1.children('a').on('mouseover',function(e){
	e.preventDefault();
	gnbLeft1.find('i').addClass('active');
	menmenu.stop().fadeIn();
});

menmenu.on('mouseleave',function(e){
	e.preventDefault();
	gnbLeft1.find('i').removeClass('active');
	menmenu.stop().fadeOut();
});

gnbLeft1.children('a').on('mouseleave',function(e){
	e.preventDefault();
	gnbLeft1.find('i').removeClass('active');
	menmenu.stop().fadeOut();
});

gnbLeft2.children('a').on('mouseover',function(e){
	e.preventDefault();
	gnbLeft2.find('i').addClass('active');
	womenmenu.stop().fadeIn();
});

womenmenu.on('mouseleave',function(e){
	e.preventDefault();
	gnbLeft2.find('i').removeClass('active');
	womenmenu.stop().fadeOut();
});

gnbLeft2.children('a').on('mouseleave',function(e){
	e.preventDefault();
	gnbLeft2.find('i').removeClass('active');
	womenmenu.stop().fadeOut();
});

var msg=$('.msg');
var msgA=msg.children('a');
var chat=msgA.children('i:nth-of-type(1)');
var x=msgA.children('i:nth-of-type(2)');
var modal=$('.modal');

modal.hide();
chat.on('click',function(e){
	e.preventDefault();
	chat.addClass('active');
	x.addClass('active');
	modal.fadeIn();
});

x.on('click',function(e){
	e.preventDefault();
	x.removeClass('active');
	chat.removeClass('active');
	modal.fadeOut();
});


var manbanner = $('.manbanner');
var man= manbanner.find('dl');
var womanbanner =$('.womanbanner');
var woman=womanbanner.find('dl');

	
	man.on('mouseover',function(){
		manbanner.stop().addClass('active');
		womanbanner.css({'width':'30%'});
		woman.fadeOut();
	});

	man.on('mouseleave',function(){
		manbanner.stop().removeClass('active');
		womanbanner.css({'width':'50%'});
		woman.fadeIn();
	});



	woman.on('mouseover',function(){
		womanbanner.stop().addClass('active');
		manbanner.css({'width':'30%'});
		man.fadeOut();
	});
	woman.on('mouseleave',function(){
		womanbanner.stop().removeClass('active');
		manbanner.css({'width':'50%'});
		man.fadeIn();
	});

var nl =$('.nl');
var en =$('.en');

nl.on('click',function(){
	nl.find('a').css({'color':'#333','fontWeight':'bold'})
});

en.on('click',function(){
	en.find('a').css({'color':'#333','fontWeight':'bold'})
});

var searchBox =$('.searchBox');
var searchBtn =$('.gnb_left').children('li:nth-of-type(1)');
var close=$('.close');

	searchBox.hide();
	searchBtn.on('click',function(){
		searchBox.slideDown('slow');
	});

	close.on('click',function(){
		searchBox.slideUp('slow');
	})

var cartemoji =$('.cartemoji');
var cart =$('.cart');
var close=$('.closebtn');
cart.hide();
cartemoji.on('click',function(){
	cart.show();
	$('.bannerBox').append('<div class="g"></div>');
	$('.g').css({'backgroundColor':'rgba(255,255,255,255,0.7)',
				'width':'100%',
				'height':'100%'})
});


close.on('click',function(){
	cart.hide();
})
})(jQuery);


