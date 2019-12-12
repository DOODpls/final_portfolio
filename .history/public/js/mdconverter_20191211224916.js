// function conmvert(){

//   let a = document.querySelector("#post-content")
//   let raw = document.querySelector("#invitext")
//   let aa = raw.textContent;
//   document.getElementById('post-content').innerHTML += aa;
// // var converter = new showdown.Converter();
// // var text = raw.innerHTML;
// // a.innerHTML = converter.makeHtml(text);
// // console.log(text)
// }

// conmvert();


var myApp = angular.module('myApp',['ngSanitize']);

function MyCtrl($scope) {
  let raw = document.querySelector("#invitext")
  let aa = raw.textContent;
  $scope.myHTML = aa;
}