var data = fakeApiGet();
console.log(data.length); //we need to get 3 here

function fakeApiGet() {
  return setTimeout(function(){
    return [1, 2, 3];
  }, 1000);
}
