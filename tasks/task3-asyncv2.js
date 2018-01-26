getCustomers(function (customers) {
  //some processing
  if (5 > 2) { //dummy statement just to increase indentation
    for (var i = 0; i < customers.length; i++) {
      getCustomerDetails(customers[i], function (customerDetails) {
        if(customerDetails.deliveryAddress) { //another bunch of 'smart' logic
          sendOrder(customerDetails.deliveryAddress);
        }
      });
    }
  }
});

function getCustomers(callback) {
  var data = [
    {firstName: "Jon", lastName: "Snow"},
    {firstName: "Arya", lastName: "Stark"}
  ];
  return setTimeout(function () {
    callback(data);
  }, 1000);
}

function getCustomerDetails(customer, callback) {
  var customerDetails = {
    name: customer.firstName + ' ' + customer.lastName,
    deliveryAddress: 'Winterfell'
  };
  return setTimeout(function () {
    callback(customerDetails);
  }, 1000);
}

function sendOrder(address) {
  console.log('sending order to: ' + address);
}
