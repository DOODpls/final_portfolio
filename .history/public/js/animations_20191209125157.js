let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#nav-list-ham-id");
let webdev = document.querySelector("#scrollouter");
let bannercont = document.querySelector(".banner-container")
let projs = document.querySelector(".projects-flex");

hamb.addEventListener('click', function(){
  if(navcont.style.right == "-300px"){
    navcont.style.right = "0px";
  }else{
    navcont.style.right = "-300px";
  }
});

function childnum(){
  var x = projs.children.length;
  var childrens = [].slice.call(projs.children);
  console.log(childrens)
  console.log(childrens);
  for(i=0; i <= x; i++){
    if(i % 2 == 0){
            childrens[i].firstElementChild.className = "project-preview-d";
            childrens[i].lastElementChild.className = "project-name-d";
        }
  }
      
}
childnum();

// var y, x;
// function scroll(){
// y = webdev.scrollTop;
// x = y++;
// }

// function value(){
//   console.log(x);
//   if(y == 25){
//     console.log("LKASJDLSKJ");
//   }
// }



// webdev.addEventListener('scroll', function(e) {
//   scroll();
//   value();
// });


