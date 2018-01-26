function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');
  return this;
}

function Food(name, price) {
}

function Toy(name, price) {
}

var cheese = new Food('feta', 5);
console.log(cheese); // { name: 'feta', price: 5, category: 'food'}
var fun = new Toy('robot', 40);
console.log(fun); // { name: 'robot', price: 40, category: 'toy'}
