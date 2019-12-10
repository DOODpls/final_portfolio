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
    if(i % 2 == 0){
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#proj' + i
      })
      .setClassToggle('#proj' + i , 'goin2')
      .addIndicators()
      .addTo(controller);
    }else{
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#proj' + i
      })
      .setClassToggle('#proj' + i , 'goin')
      .addIndicators()
      .addTo(controller);
    }
  }
  

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 1,
    duration: '200%'
  })
  .setTween(TweenMax.from('.portrait-holder', 1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller)


});

