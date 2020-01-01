$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  // build a scene
  var skillsetbaner = new ScrollMagic.Scene({
    triggerElement: '#top-banner'
  })
  .setClassToggle('#top-banner', 'fade-in')
  .reverse(false)
  .addTo(controller);

var skillsflex = new ScrollMagic.Scene({
    triggerElement: '#skills-flex'
  })
  .setClassToggle('#skills-logo-desc', 'fade-in')
  .addIndicators()
  .reverse(false)
  .addTo(controller);

  var navblack = new ScrollMagic.Scene({
    triggerElement: '#skills-outer-cont',
    triggerHook: 0.8
  })
  .setClassToggle('#nav-full-cont', 'navch')
  .addTo(controller);

  var burgerblack = new ScrollMagic.Scene({
    triggerElement: '#skills-outer-cont'
  })
  .setClassToggle('#burger', 'awhite')
  .addTo(controller);

  var navlinkswhite = new ScrollMagic.Scene({
    triggerElement: '#skills-outer-cont',
    triggerHook: 0.75
  })
  .setClassToggle('#navlink', 'awhite')
  .addTo(controller);

  var goupp = new ScrollMagic.Scene({
    triggerElement: '#skills-outer-cont'
  })
  .setClassToggle('#goup', 'show')
  .addTo(controller);

  try{
    var x = projs.children.length;
  }catch{
    console.log("empty")
  }
  
  
  for(i = 0; i<= x; i++){
    if(i % 2 == 0){
      var projsweep = new ScrollMagic.Scene({
        triggerElement: '#proj' + i
      })
      .setClassToggle('#proj' + i , 'goin2')
      .reverse(false)
      .addTo(controller);
    }else{
      var projsweep2 = new ScrollMagic.Scene({
        triggerElement: '#proj' + i
      })
      .setClassToggle('#proj' + i , 'goin')
      .reverse(false)
      .addTo(controller);
    }
  }
  
  // var parralaxTl = new TimelineMax();
  // parralaxTl
  // .from('.intro-inner-cont', 1, {autoAlpha: 0, ease:Power0.easeNone})
  // .from('.portrait-holder', 1, {y: '30%',autoAlpha: 0, ease:Power0.easeNone, }, 0)
  // ;

  // var slideParallaxScene = new ScrollMagic.Scene({
  //   triggerElement: '.intro',
  //   triggerHook: 1,
  //   duration: '40%'
  // })
  // .setTween(parralaxTl)
  // .addIndicators()
  // .addTo(controller)


});

