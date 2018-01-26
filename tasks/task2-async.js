var users = fakeUsersGet();

function receiver(users) {
  console.log('received users: ', users);
}

function fakeUsersGet() {
  var users = [
    {
      name: 'Jon',
      age: 15
    },
    {
      name: 'Jack',
      age: 22
    }
  ];
  return setTimeout(function () {
    return users;
  }, 1000);
}
