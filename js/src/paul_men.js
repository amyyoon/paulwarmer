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

var arcodianLi =$('.arcodian').children('li');
var	arcodianDd =arcodianLi.find('dd');
var	arcodianDt =arcodianLi.find('dt');
var timed = 500;

arcodianDd.hide();
$('#slider-container').hide();
arcodianLi.on('click',function(e){
	e.preventDefault();
	var i = $(this).index();
	 arcodianLi.eq(i).find('dd').stop().slideDown();
	 arcodianLi.eq(i).siblings().find('dd').slideUp(timed);
	 arcodianLi.eq(i).stop().slideDown();
	 arcodianLi.eq(i).addClass('active');
	 arcodianLi.eq(i).siblings().removeClass('active');
	});

$('.price').on('click',function(e){
	$('#slider-container').slideDown();
	var i = $(this).index();
	arcodianLi.eq(i).siblings().find('dd').slideUp(timed);
	});


/*	arcodianDt.eq(i).on('click',function(e){
	e.preventDefault();
	var mydt = $(this);
	mydt.parent().siblings('dl').children('dd').slideUp(timed);
	var mycss = mydt.nextAll().css('display');
	if(mycss === 'block'){
		mydt.nextAll().slideUp(timed);
	}else{
		mydt.nextAll().slideDown(timed);
	}
});*/
var shoes=$('.shoes');
var shoesLi = shoes.children('li');  
var shoesDl =shoesLi.children('dl');

	shoesLi.on('mouseover',function(){
		var i =$(this).index();
		shoesLi.eq(i).find('dt').addClass('active').fadeIn(1000);
		shoesLi.eq(i).find('dd').addClass('active').fadeIn(1000);
	});

	shoesLi.on('mouseleave',function(){
		var i =$(this).index();
		shoesLi.eq(i).find('dt').removeClass('active').fadeOut(1000);
		shoesLi.eq(i).find('dd').removeClass('active').fadeOut(1000);
	});

})(jQuery);


  $(function() {
        $('#slider-container').slider({
            range: true,
            min: 299,
            max: 1099,
            values: [299, 1099],
            slide: function(event, ui) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] );
                $("#amount1").val (" $" + ui.values[ 1 ] );
                var mi = ui.values[ 0 ];
                var mx = ui.values[ 1 ];
                filterSystem(mi, mx);
            }
        });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });

function filterSystem(minPrice, maxPrice) {
	$("#computers div.system").hide().filter(function() {
		var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
	}).show();
}










