

let a = document.querySelector("#a")
var converter = new showdown.Converter();
var text = 'items.blog_cont';
a.innerHTML = converter.makeHtml(text);

