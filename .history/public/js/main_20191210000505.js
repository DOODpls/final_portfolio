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
  
  var parralaxTl = new TimelineMax();
  parralaxTl
  .from('.intro', 1, {autoAlpha: 0, ease:Power0.easeNone})
  .from('.portrait-holder', 1, {y: '-10%', ease:Power0.easeNone, })
  ;

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.intro-inner-cont',
    triggerHook: 1,
    duration: '50%'
  })
  .setTween(parralaxTl)
  .addTo(controller)


});

