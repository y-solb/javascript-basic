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

  // ๐ฉ
  const solbi2 = {
    name: name,
    age: age,
  };

  // โจ
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

  // ๐ฉ
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // โจ
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['๐บ', '๐ถ'];

  // ๐ฉ
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // โจ
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

/**
 * Spread Syntax
 * reference๋ฅผ ๋ณต์ฌ
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
  const fruits1 = ['๐', '๐'];
  const fruits2 = ['๐', '๐'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: '๐ถ' };
  const dog2 = { dog: '๐' };
  const dog = { ...dog1, ...dog2 }; // ๋์ผํ ํค์ผ ๊ฒฝ์ฐ ๋ค์ ๊ฐ์ด ๋ฎ์ด์ง๋ค.
  console.log(dog);
}

/**
 * Default parameters
 */
{
  // ๐ฉ
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

  // โจ
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
  // ๐ฉ
  {
    let component;
    if (isCat) {
      component = '๐บ';
    } else {
      component = '๐ถ';
    }
    console.log(component);
  }

  // โจ
  {
    const component = isCat ? '๐บ' : '๐ถ';
    console.log(component);
    console.log(isCat ? '๐บ' : '๐ถ');
  }
}

/**
 * Template Literals
 */
{
  const weather = 'โ';
  const temperature = '16C';

  // ๐ฉ
  console.log('Today weather is ' + weather + ' and temperature is ' + temperature + '.');

  // โจ
  console.log(`Today weather is ${weather} and temparature is ${temperature}`);
}
