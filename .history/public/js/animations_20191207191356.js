let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
})


function hideInfo(){
  if(window.event.srcElement.id != 'hamb-menu'){
  }
}

document.onclick = hideInfo;