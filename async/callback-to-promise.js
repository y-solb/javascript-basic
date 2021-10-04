'use strict';

// JavaScript is synchronous. 동기적
// Execute the code block in order after hoisting. 순서대로 실행
// hoisting: var, function declaration 자동적으로 선언이 제일 위로 올라감

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback 즉시 실행
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('Synchronous'));

// Asynchronous callback 나중 실행
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('Asynchronous'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'solbi' && password === 'dream') || (id === 'coder' && password === 'academy')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'solbi') {
          resolve({ name: 'solbi', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => {
    alert(`Hello ${user.name}, you have a ${user.role} role`);
  })
  .catch(console.log);
