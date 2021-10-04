'use strict';

// Promise is a JavaScript object for asynchronous operation. 비동기적
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. 조심하기!
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('solbi');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Hamdling
const getChicken = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = (chicken) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${chicken}=>🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`), 1000);
  });

getChicken() //
  .then(getEgg)
  .catch((error) => {
    return '🍗';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// .then((chicken) => getEgg(chicken))
// .then((egg) => cook(egg))
// .then((meal) => console.log(meal));
