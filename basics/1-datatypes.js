var n1 = 5;
var n2 = Number(123);
var n3 = true + true;

var s1 = "I'm a string";
var s2 = 'I\'m a string as well';
var s3 = '5';

var obj = {
  property: 'someValue',
  property2: 5,
  myBool: false,
  SomeAnotherStuff: function () {

  }
};

var arr = [1, 2, 3];

console.log(typeof n1); //number
console.log(typeof n2); //number
console.log(typeof n3); //number

console.log(typeof s1); //string
console.log(typeof s2); //string
console.log(typeof s3); //string

console.log(typeof obj); // object
console.log(typeof arr); // object

console.log(typeof (5 + 'str')); //string
console.log(typeof (5 + '1')); //string

console.log(typeof (s1.length)); //number
