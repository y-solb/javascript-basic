// number, string, boolean, null, undefined
let num = 2;
let num2 = num; // 값만 복사되어짐
console.log(num);
console.log(num2);

num2 = 3;
console.log(num);
console.log(num2);

// object
const obj = {
  name: 'solbi',
  age: 21,
};
console.log(obj.name);

const obj2 = obj; // 주소가 복사되어짐(reference)
console.log(obj2.name);

obj.name = 'bonng';
console.log('_____');
console.log(obj.name);
console.log(obj2.name);

// 일반 변수는 const로 선언이 되면 값이 변경이 불가능
// object일 경우 값이 주소를 가르키기 때문에 obj.name="james"; 방식으로 값 변경이 가능
// obj= {
//   name: 'james',
//   age: 25,
// }; 이런 방식은 불가능
