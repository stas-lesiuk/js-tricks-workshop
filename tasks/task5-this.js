function Order() {
  this.items = [];
  this.addItem = function (item) {
    this.items.push(item);
  };

  fakeApiGet().then(function (response, error) {
    this.addItem(response.data); //why this.addItem is not a function?
  })
}

function fakeApiGet() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        label: 'Table',
        price: 500
      }, {
        label: 'Chair',
        price: 150
      });
    }, 1000);
  });
}

var order = new Order();
