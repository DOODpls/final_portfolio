let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#nav-list-ham-id");
let webdev = document.querySelector("#scrollouter");
let bannercont = document.querySelector(".banner-container")
let projs = document.querySelector(".projects-flex");
let fullnav = document.querySelector("#nav-full-cont");
hamb.addEventListener('click', function(){
  if(navcont.style.right == "-300px"){
    navcont.style.right = "0px";
    hamb.classList.add = "awhite";
  }else if(navcont.style.right == "0px"){
    hamb.classList.add = "awhite";
    navcont.style.right = "-300px";
  } else {
    if(fullnav.className == "nav-full-cont navch"){
      hamb.classList.add = "awhite";
    }
    else{
      hamb.classList.add = "ablack";
    }
  }
});

function childnum(){
  var x = projs.children.length;
  var childrens = [].slice.call(projs.children);
  console.log(childrens);
  for(i=0; i <= x; i++){
    if(i % 2 == 0){
        childrens[i].className = "project-box-d";
        childrens[i].firstElementChild.className = "project-preview-d";
        childrens[i].lastElementChild.className = "project-name-d";
    }
    childrens[i].id = "proj" + i;
  }
}
childnum();

