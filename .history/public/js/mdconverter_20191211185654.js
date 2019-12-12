function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter();
a.innerHTML = converter.makeHtml(raw.textContent);

}

conmvert();