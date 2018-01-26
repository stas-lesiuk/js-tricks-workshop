function makeCounter() {
  //implementation
}

var counter = makeCounter(); // (*)

console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3

// another, independent counter
var counter2 = makeCounter();
console.log( counter2() ); // 1
