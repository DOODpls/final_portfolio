let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
})

document.onclick = function(e){
  if(navcont.style.right = "0px"){
    if(e.target.id !== 'hamb-menu'){
      navcont.style.right = '-300px';
   }
  }else{
    navcont.style.display = "block";
  }
  
};