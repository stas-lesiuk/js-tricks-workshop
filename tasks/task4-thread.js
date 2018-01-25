var wasDataReceived = false;
var maxTimesToCheck = 5000;
var i = 0;
fakeApiGet();
while(!wasDataReceived && i < maxTimesToCheck) {
  //do nothing until there is no data
  i++;
}
console.log(data.length); //we need to get 3 here
function fakeApiGet() {
  return setTimeout(function(){
    return [1, 2, 3];
  }, 1000);
}
