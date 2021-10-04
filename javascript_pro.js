/**
 * Ternary Operator
 */
// 💩Bad Code💩
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}

// ✨Good Code✨
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}

/**
 * Nullish coalescing operator
 */
// 💩Bad Code💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😴';
  }
  console.log(message);
}

// ✨Good Code✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😴';
  console.log(message);
}
printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to display 😴
printMessage(null); // Nothing to display 😴

// 🚨 Default parameter is only for undefined
function printMessage(text = 'Nothing to display 😴') {
  console.log(text);
}
printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to display 😴
printMessage(null); // null

/**
 * leftExpr ?? rightExpr (Nullish coalescing operator)
 * => null, undefined
 * leftExpr || rightExpr (Logical OR operator)
 * => false(null, undefined, 0, -0, NaN, '', false)
 */

// 🚨 Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😴';
  console.log(message);
}
printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to display 😴
printMessage(null); // Nothing to display 😴
printMessage(0); // Nothing to display 😴
printMessage(''); // Nothing to display 😴

// Expr
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return '💻💻';
}

/**
 * Object Destructuring
 */
const personn = {
  name: 'Julia',
  age: 20,
  phone: '01012345678',
};

// 💩Bad Code💩
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// 💩Bad Code💩
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// ✨Good Code✨
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

/**
 * Spread Syntax - Object
 */
const item = { type: '👚', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'W' };

// 💩Bad Code💩
item['price'] = detail.price; // 기존에 존재하는 object를 변경하는 것은 bad

// 💩Bad Code💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// 💩Bad Code💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// ✨Good Code✨
const shirt1 = Object.assign(item, detail);

// ✨Best Code✨
const shirt2 = { ...item, ...detail, price: 40 };

// Spread Syntax - Array
let fruits = ['🍋', '🍒', '🍇'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];

// fruits.unshift('🍑');
fruits = ['🍑', ...fruits];

const fruits2 = ['🥥', '🍍', '🍈'];
let combined = fruits.concat(fruits2);
combined = [...fruits, '🥝', ...fruits2];

/**
 * Optional Chaining
 */
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

// 💩Bad Code💩
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✨Good Code✨
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// ✨Good Code✨
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet!';
  console.log(title);
}

/**
 * Template Literals (Template String)
 */
const person = {
  name: 'Julia',
  score: 4,
};

// 💩Bad Code💩
console.log('Hello ' + person.name + ', Your current score is: ' + person.score);

// ✨Good Code✨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// ✨Good Code✨
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// ✨Good Code✨
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}

/**
 * Looping
 */
const items = [1, 2, 3, 4, 5, 6];

// ✨Good Code✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✨Good Code✨
const result2 = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result2);

/**
 * Promise -> Async/await
 */

// 💩Bad Code💩
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// ✨Good Code✨
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(update, profile);
}

/**
 * Remove Duplicates!
 */
const array = ['🐶', '🐱', '🐱', '🐷', '🐶', '🐶', '🐱', '🦁'];
console.log(array);
console.log([...new Set(array)]);
