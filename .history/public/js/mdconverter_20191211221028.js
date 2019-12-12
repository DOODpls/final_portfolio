function conmvert(){

  let a = document.querySelector("#post-container")
  let raw = document.querySelector("#invitext")
  
  document.getElementById('post-container').innerHTML += raw;
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}

conmvert();