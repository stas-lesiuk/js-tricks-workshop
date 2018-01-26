var data = fakeApiGet();

dataReceiver(data);
anotherDataReceiver(data);

function dataReceiver(data) {
  console.log(data.length); //we need to get 3 here
}

function anotherDataReceiver(data) {
  for(var i = 0; i < data.length; i ++) {
    data[i] ++;
  }
  console.log(data); //we need to get proper increased array here
}

function fakeApiGet() {
  return setTimeout(function(){
    return [1, 2, 3];
  }, 1000);
}
