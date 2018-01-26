function Dog(nick) {
  this.nickname = nick;
}

Dog.prototype.bark = function () {
  console.log(this.nickname + ' says woof!');
}

var dog = new Dog('Spike');
dog.bark();
