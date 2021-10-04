// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve('solbi');
//   });
// }

// async를 함수 앞에 쓰면 Promise로 변환해 줌
async function fetchUser() {
  // do network request in 10 secs...
  return 'solbi';
}

const user = fetchUser();
console.log(user); // Promise를 return
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(2000);
  return '🍌';
}

// 체이닝하는 것보다 위에 코드가 더 깔끔!
// function getBanana() {
//   return delay(2000).then(() => '🍌');
// }

// 동시에 시작이 가능한 경우 병렬적으로 실행하기
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}+${banana}`;
}

// getApple을 실행하는데 1초를 기다리고 getBanana를 실행하는데 2초를 또 기다리기 때문에 비효율
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple}+${banana}`;
// }

// 체이닝하는 것보다 위에 코드가 더 깔끔!
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple}+${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
