$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#inner-container-text-id'
  })
  .setClassToggle('#inner-container-text-id', 'fade-in')
  .addTo(controller);
});