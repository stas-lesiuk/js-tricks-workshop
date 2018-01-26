var nums = [1, 2, 5];

var numsDoubled = nums.map(function (num) {
  return num * num;
});
console.log(numsDoubled);

var orders = [
  {
    items: 5,
    sum: 150
  },
  {
    items: 3,
    sum: 100
  }, {
    items: 7,
    sum: 220
  }];


var ordersWithALotOfItems = orders.filter(function (order) {
  return orer.items >= 5;
});
console.log(ordersWithALotOfItems);
