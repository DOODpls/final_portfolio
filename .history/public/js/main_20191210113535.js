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
  .from('.intro-inner-cont', 1, {autoAlpha: 0, ease:Power0.easeNone})
  .from('.portrait-holder', 1, {y: '30%',autoAlpha: 0, ease:Power0.easeNone, }, 0)
  ;

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 1,
    duration: '40%'
  })
  .setTween(parralaxTl)
  .addIndicators()
  .addTo(controller)


});

