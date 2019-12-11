function conmvert(){
  let a = document.querySelector("#a")
var converter = new showdown.Converter();
var text = '# hello, markdown!';
a.innerHTML = text;
}

conmvert();