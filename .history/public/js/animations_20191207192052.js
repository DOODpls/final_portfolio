let hamb = document.querySelector(".hamburger");;
let navcont = document.querySelector(".nav-list-ham");

hamb.addEventListener('click', function(){
  navcont.style.right = "0px";
  hamb.style.display = "none";
})

document.onclick = function(e){
  if(navcont.style.right = "0px"){
    navcont.style.display = "block";
  }else{
    
  }
  
};