function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")

  md = new MarkdownIt();
var result = md.render(raw);
a.innerHTML = converter.makeHtml(result);
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}

conmvert();