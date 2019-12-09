let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
});

var mq = window.matchMedia( "(min-width: 800pxpx)" );
if (mq.matches) {
    // window width is at less than 570px
}
else {
    // window width is greater than 570px
}