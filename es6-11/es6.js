/**
 * Shorthand property names
 */
{
  const solbi1 = {
    name: 'Solbi',
    age: '24',
  };

  const name = 'Solbi';
  const age = '24';

  // 💩
  const solbi2 = {
    name: name,
    age: age,
  };

  // ✨
  const solbi3 = {
    name: name,
    age: age,
  };

  console.log(solbi1, solbi2, solbi3);
}

/**
 * Destructuring Assignment
 */
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['😺', '🐶'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

/**
 * Spread Syntax
 * reference를 복사
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍉', '🍇'];
  const fruits2 = ['🍒', '🍑'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: '🐶' };
  const dog2 = { dog: '🐕' };
  const dog = { ...dog1, ...dog2 }; // 동일한 키일 경우 뒤에 값이 덮어진다.
  console.log(dog);
}

/**
 * Default parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }

  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}

/**
 * Ternary Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = '😺';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😺' : '🐶';
    console.log(component);
    console.log(isCat ? '😺' : '🐶');
  }
}

/**
 * Template Literals
 */
{
  const weather = '⛅';
  const temperature = '16C';

  // 💩
  console.log('Today weather is ' + weather + ' and temperature is ' + temperature + '.');

  // ✨
  console.log(`Today weather is ${weather} and temparature is ${temperature}`);
}
