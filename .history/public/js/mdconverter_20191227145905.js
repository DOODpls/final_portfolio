function conmvert(){

  let a = document.querySelector("#post-content")
  let raw = document.querySelector("#invitext")
  let aa = raw.textContent;
  document.getElementById('post-content').innerHTML += blogcont;
// var converter = new showdown.Converter();
// var text = raw.innerHTML;
// a.innerHTML = converter.makeHtml(text);
// console.log(text)
}



try{
  conmvert();
}catch{
  console.log("null")
}