$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#top-banner'
  })
  .setClassToggle('#top-banner', 'fade-in')
  .addTo(controller);
});