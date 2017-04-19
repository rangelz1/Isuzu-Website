

(function() {
	var aboutEl = $('div.about'),
	aboutElOffset = 350,
	documentEl = $(document);

	documentEl.on('scroll', function() {
		if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden');
	});
})();

function myDelay() {
    document.getElementById("indxh1").style.WebkitAnimationDelay = "2s";  // Code for Chrome, Safari, and Opera
    document.getElementById("indxh1").style.animationDelay = "2s";
}