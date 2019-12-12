function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter({extensions: ['showdown-prettify']}),
var text = raw.innerHTML;
a.innerHTML = converter.makeHtml(text);
console.log(text)
}

conmvert();