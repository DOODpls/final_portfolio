function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")

var converter = new showdown.Converter({extensions: ['prettify']}),
    input = raw;
    html = converter.makeHtml(input);
    a.innerHTML = converter.makeHtml(html);
    console.log(html);
  
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}

conmvert();


