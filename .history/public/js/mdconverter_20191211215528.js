function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")

  md = new MarkdownIt();
var resddult = md.render(raw);
a.innerHTML = result;
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}

conmvert();