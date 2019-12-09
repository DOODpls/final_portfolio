let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#nav-list-ham-id");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  navcont.insertBefore(hamb, navcont.firstChild);
});

