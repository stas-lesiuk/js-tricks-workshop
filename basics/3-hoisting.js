// window.myVar = 5;
// var myVar = 5;
// myVar = 5;

a();
console.log()

function a() {
  var x = 1;
  window.y = 2;
  z = 3; //antipattern, window.z
}
