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

printImmediately(() => console.log('Synchronous')); // 동기

// Asynchronous callback 나중 실행
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('Asynchronous'), 2000); // 비동기

// Callback Hell example
// 가독성이 떨어지고 유지보수가 어려움
class UserStorage {
  loginUser(id, password, OnSuccess, onError) {
    setTimeout(() => {
      if ((id === 'solbi' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        OnSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, OnSuccess, onError) {
    setTimeout(() => {
      if (user === 'solbi') {
        OnSuccess({ name: 'solbi', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
