$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#top-banner'
  })
  .setClassToggle('#top-banner', 'fade-in')
  .addIndicators()
  .addTo(controller);

  var x = projs.children.length;
  
  for(i = 0; i<= x; i++){
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#top-banner'
    })
    .setClassToggle('#proj' + i , 'fade-in')
    .addIndicators()
    .addTo(controller);
  }
  
});