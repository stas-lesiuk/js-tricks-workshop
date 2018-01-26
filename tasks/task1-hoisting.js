x = 5;
a();
function a() {
  var x;
  x = global.x * global.x;
  console.log('inside: ', x);
}
/*
The console.log should display 5, not 25.
Additional variables are not alloved.
Variable name change is not allowed as well.
*/
console.log(x);
