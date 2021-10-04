/**
 * Optional Chaining (ES11)
 */
{
  const person1 = {
    name: 'solbi',
    job: {
      title: 'Web developer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); 값이 없기 때문에 Error
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job ? (person.job.manager ? person.job.manager.name : undefined) : undefined);
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator (ES11)
 */
{
  // Logical OP operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Solbi';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  // 💩
  {
    const name = ''; // false
    const userName = name || 'Guest';
    console.log(userName);

    const num = 0; // false
    const message = num || 'undefined';
    console.log(message);
  }

  // ✨
  {
    const name = ''; // true
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0; // true
    const message = num ?? 'undefined';
    console.log(message);
  }
}
