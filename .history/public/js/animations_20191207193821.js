let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#hamb-menu")

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
});

var mq = window.matchMedia( "(min-width: 800px)" );
if (mq.matches) {
    // window width is at less than 570px
}
else {
  navcontid.className = ".nav-list-ham";
}