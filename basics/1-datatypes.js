var n1 = 5;
var n2 = Number(12.5);
var n3 = true + true;

var s1 = "I'm a string";
var s2 = 'I\'m a string as well';
var s3 = '5';

var b1 = true;
var b2 = Boolean(5 < 2); //false
var b3 = (5 < 2); //false

var obj = {
  property: 'someValue',
  property2: 5,
  myBool: false,
  SomeAnotherStuff: function () {

  }
};

var arr = [1, 2, 3];

var arrayOfVars = [
  n1, n2, n3,
  s1, s2, s3,
  b1, b2,
  obj,
  arr
];

arrayOfVars.forEach(function(variable) {
  console.log(variable + ' has type ' + typeof  variable);
});


console.log(typeof (5 + 'str')); //string
console.log(typeof (5 + '1')); //string

console.log(typeof (s1.length)); //number
