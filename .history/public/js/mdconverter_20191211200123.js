const fs = require("fs");

function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
var converter = new showdown.Converter();
var text = raw.innerHTML;
a.innerHTML = converter.makeHtml(text);
console.log(text)
}

conmvert();


fs.readFile('./public/blogs/blog1.md', function(err, buf) {
  console.log(buf.toString());
});
