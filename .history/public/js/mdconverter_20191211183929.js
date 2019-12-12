

let a = document.querySelector("#blog-content")
var converter = new showdown.Converter();
var text = items.blog_cont;
a.innerHTML = converter.makeHtml(text);

