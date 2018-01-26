function logMessage(msg) {
  console.log(msg);
}

var messages = ["hello", 42, {pi: 3.14}];
var buffer = [];

for (var i = 0; i < messages.length; i++) {
  buffer[i] = function () {
    logMessage(messages[i]);
  }
}

for (var j = 0; j < buffer.length; j++) {
  buffer[j]();
}
