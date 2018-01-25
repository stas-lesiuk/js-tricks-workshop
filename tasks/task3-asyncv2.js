tagetData().then(function(data) {
  console.log(data.length);
});

function getData() {
  var data = [
    {firstName: "Jon", lastName: "Snow"},
    {firstName: "Arya", lastName: "Stark"}
  ];
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data);
    }, 2000);
  });
}
