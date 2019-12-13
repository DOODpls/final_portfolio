let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");
let navcontid = document.querySelector("#nav-list-ham-id");
let webdev = document.querySelector("#scrollouter");
let bannercont = document.querySelector(".banner-container")
let projs = document.querySelector(".projects-flex");
let navful = document.querySelector("#nav-full-cont");
let blogtitle = document.querySelector("#blogtitle");


try{
  hamb.addEventListener('click', function(){
    if(navcont.style.right == "-300px"){
      navcont.style.right = "0px";
      hamb.className = "hamburger awhite";
    }else{
      if(navful.className == "nav-full-cont navch"){
      hamb.className = "hamburger awhite";
      }else{
        hamb.className = "hamburger ablack";
      }
      navcont.style.right = "-300px";
      
    }
  });
}catch{
  console.log("null")
}

function childnum(){
  var x = projs.children.length;
  var childrens = [].slice.call(projs.children);
  console.log(childrens);
  for(i=0; i <= x; i++){
    if(i % 2 == 0){
        try{
          childrens[i].className = "project-box-d";
        childrens[i].firstElementChild.className = "project-preview-d";
        childrens[i].lastElementChild.className = "project-name-d";
        }catch{
          console.log("null")
        }
    }
    childrens[i].id = "proj" + i;
  }
}
try{
  childnum();
}catch{
  console.log("null")
}


var i;
try{
  var divs = document.getElementsById('#blog-content');
}catch{
  console.log("null")
}

for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'blog-content') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,300) + '<a href="#">Read more</a>';
  }
}

function slugify(string) { //https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}


function slugthis(){
  document.getElementById('blogslug').value = slugify(blogtitle.value);
}

$('.js-tilt').tilt({
  reset: false
})