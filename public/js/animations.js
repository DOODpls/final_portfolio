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

try{
  for(i=0;i<divs.length;i++) {
    if(divs[i].className == 'blog-content') {
      divs[i].innerHTML = divs[i].innerHTML.substring(0,300) + '<a href="#">Read more</a>';
    }
  }
}catch{
  console.log("null")
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


$(function(){
  $('.js-tilt').tilt({
    scale: 1.1,
    speed: 2000
})
})


function tabops(evt, optionname){
  var tabopt;
  tabopt = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabopt.length; i++){
    tabopt[i].style.display = "none";
  }
  document.getElementById(optionname).style.display = "flex";
}

var start = 0;
var limit = 2;

function getNext(){
  start = start + limit;
  $.ajax({
    url: "/get-post/" + start + "/" + limit,
    method: "GET",
    success: function(response){
      renderPosts(response);
    }
  });
}
// function getPrevious(){
//   start = start - limit;
//   $.ajax({
//     url: "/get-post/" + start + "/" + limit,
//     method: "GET",
//     success: function(response){
//       renderPosts(response);
//     }
//   });
// }

function renderPosts(resss){
  if (resss.blogss.length > 0){
    var html = "";
    for(var a = 0; a < resss.blogss.length; a++){
      html += '<div class="blogcontainer">';
      html += '<a href="/blogs/' + resss.blogss[a].slug + '"><h2 class="blog-title">' + resss.blogss[a].date + ': ' +  resss.blogss[a].title + '</h2></a>';
      html += '<p class="blog-content" id="blog-content"> '+ resss.blogss[a].blog_summary + '</p>';
      html += '</div>';
    }
    console.log('aaa');
    $("#blog-inner-cont").append(html)
  }
}


$(window).scroll(function(){
  if($(window).scrollTop() >= $(document).height() - $(window).height() - 
  50
  ){
    getNext();
  }
})

function nores(){
  var couter = document.querySelector('#blog-inner-cont');
  var html = "";
  try{
    if (couter.innerHTML.trim() === ""){
      html += '<h1>NO RESULT</h1>';
      $("#blog-inner-cont").append(html)
    }
  }catch{
    console.log("null");
  }
}
nores();