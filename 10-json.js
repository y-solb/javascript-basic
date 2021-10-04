// JSON
// JavaScript Object Notation

// 1. Object to JSON (오브젝트를 JSON으로)
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }, // 함수는 오브젝트의 데이터가 아니기 때문에 제이슨에 포함 X
};

json = JSON.stringify(rabbit);
console.log(json); // 함수는 object의 data가 아니기 때문에 제외됨

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === 'name' ? 'solbi' : value;
});
console.log(json);

// 2. JSON to Object (제이슨을 오브젝트로)
// parse(json)
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === 'birthDate' ? new Date(value) : value; // 에러 해결법: key값이 bithDate라면 new Data(value)로 변환
});
console.log(obj);
rabbit.jump();
// obj.jump(); // jump는 JSON으로 변환할 때 포함되지 않았기 때문에 에러가 난다.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 오브젝트에서 JSON으로 변환할 때 string으로 변환되었기 때문에 제이슨에서 다시 오브젝트로 변환 시  에러가 난다.

console.log(obj.birthDate);
console.log(obj.birthDate.getDate());
