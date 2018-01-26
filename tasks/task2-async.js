firstPromise()
  .then(function (firstPromiseResponse) {
    // dataReceiver(data);
    // anotherDataReceiver(data);
    console.log('first promise here:', firstPromiseResponse);
    return anotherPromise(firstPromiseResponse);
  })
  .then(function (secondPromiseResponse) {
    console.log('second promise here:', secondPromiseResponse);
  });

function firstPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([1, 2, 3]);
    }, 1000);
  });
}

function anotherPromise(data) {
  return new Promise(function (resolve, reject) {
    try {
      var x = y + z
    }
    catch (error) {
      reject(error);
    }
    resolve(data.length);
  })
}
