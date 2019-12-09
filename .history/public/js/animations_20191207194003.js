let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#hamb-menu")

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
});
