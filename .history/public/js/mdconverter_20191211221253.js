function conmvert(){

  let a = document.querySelector("#post-container")
  let raw = document.querySelector("#invitext")
  let aa = raw.textContent;
  console.log(aa)
  document.getElementById('post-container').innerHTML += aa;
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}

conmvert();