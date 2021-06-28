$(document).ready(function() { 

    
    

    $("ul.mainmenu > li > a").each(function() {
        $(this).html($(this).text().replace('&', "&<br>", 'g')); 
        $(this).html($(this).html().replace(')', ")<br>", 'g')); 
        $(this).html($(this).html().replace(',', ",<br>", 'g')); 
        //$(this).text($(this).text().replace(/,/g, ",<br>")); 
        //$(this).text($(this).text().replace(/\)/g, ")<br>")); 
        //$(this).text($(this).text().replace(/&amp;/g, '&<br>');
    });

	$(".search-input ").attr("placeholder", "Suche: Titel, Autor, Stichwort, ISBN, GA");
	//$('.single .row .col .widget-two-col:nth-child(2), .single .row .col .widget:nth-child(3)').remove('h1');
	//Bugfix Single Owl-Carousel if only one image
    $('.page-singleitem .owl-stage').each(function() {
        if ($('> div', this).length === 1) {
			console.log('gleich 1');
			$('.page-singleitem .owl-thumbs').css('display','none');
           $('.page-singleitem .owl-thumbs').hide();
        } else {}
    });
	
});
// Document Ready End
