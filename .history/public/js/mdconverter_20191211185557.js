function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter();
var text = raw.textContent;
a.innerHTML = converter.makeHtml(text);

}

conmvert();