function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter();
var text = raw.innerHTML;
a.innerHTML = converter.makeHtml(text);
console.log(text)
for(i=0;i<a.length;i++) {
  if(a[i].className == 'myclass') {
    a[i].innerHTML = a[i].innerHTML.substring(0,300) + '<a href="#">Read more</a>';
  }
}
}

conmvert();

var i;

