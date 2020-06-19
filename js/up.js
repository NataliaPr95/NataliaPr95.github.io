function topFunction()
{

		$('html').animate({scrollTop: 100}, 1000);
}
topFunction();

$(document).ready(function(){
	$("#menu").on("click","button", function(e){
		event.preventDefault();
		
		var id = $(this).attr('href'),
		
		top = $(id).offset().top;
		
		$('body, html').animate({scrollTop: top}, 1000);
	});
});