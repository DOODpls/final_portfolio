function conmvert(){

  let a = document.querySelector("#post-content")
var converter = new showdown.Converter();
var text = 'items.blog_cont';
a.innerHTML = converter.makeHtml(text);

}

conmvert();