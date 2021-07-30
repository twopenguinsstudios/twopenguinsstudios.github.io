$(document).ready(function(){
   $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
	  overlayBgColor: '#FFF'
    })


  

});


