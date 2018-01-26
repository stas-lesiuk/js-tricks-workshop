function ApiHandler(callback) {
  callback({someItemProp: 1});
}

function SomeService() {
  this.items = [];
  this.addItem = function (item) {
    this.items.push(item);
  }
}

var service = new SomeService();
ApiHandler(service.addItem); // this would cause error
console.error(service.items);
