$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});
	$(".popup_c").magnificPopup();

	$(".carousel").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
    		}
    	},
    	navText : ""
	});

	//размер bgi подстраивается под размер viewport 
	function wResize() {
		$("header").css("height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});

	// tabs
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".s_contacts .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(tis);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thank you for request!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() { 

	$(".top_header").animated("bounceIn", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOutRight");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$(".contacts_top").animated("fadeInUp", "fadeOut");
	$("footer h2").animated("fadeInUp", "fadeOut");


});
