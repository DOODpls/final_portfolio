let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#nav-list-ham-id");
let webdev = document.querySelector("#webdev");
let bannercont = document.querySelector(".banner-container")

hamb.addEventListener('click', function(){
  if(navcont.style.right == "-300px"){
    navcont.style.right = "0px";
  }else{
    navcont.style.right = "-300px";
  }
});

var intersectionOptions = {
  root: null,  // use the viewport
  rootMargin: '0px',
  threshold: 1.0
}

function intersectionCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      webdev.className = "class1"
      

    } else {
      webdev.className = "class2"
    }
  });
}

var observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

var target = document.querySelector('#box');
observer.observe(target);