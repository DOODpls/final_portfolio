function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter();
var text = raw.innerHTML;
a.innerHTML = converter.makeHtml(text);
console.log(text)
}

conmvert();

var i;
var divs = document.getElementsById('#your-div-id');
for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'myclass') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,300) + '<a href="#">Read more</a>';
  }
}