let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
})


function hideInfo(){
  if(window.event.srcElement.id != 'hamb-menu'){
    if (navcont.style.right = 0){
      document.getElementById('hamb-menu').style.display = 'none';
    }else{
      document.getElementById('hamb-menu').style.display = 'block';
    }
  }
}

document.onclick = hideInfo;