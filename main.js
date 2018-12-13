
// dont start till the document is loaded and ready
$(document).ready(function(){
	// on click, were gonna find the section with the header in #mainContainer and execute this fn
	$("#mainContainer").on('click', 'h2', function(){
	// lets make section equal find stuff under this(h2)
		let section = $(this).siblings('.stuff') 
	// remove class 'clicked' from everything with the class .stuff in main container, 
		$('#mainContainer .stuff').removeClass('clicked')
	// add class .clicked back to whatever section we clicked on(h2)
		section.addClass('clicked')
	})
	

})