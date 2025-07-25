//基礎編
//Q1
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + 'です。');

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`;

console.log(templateText);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 *
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

let average = sum / playerList.length;
console.log(average);
console.log(sum);

//Q6
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
}

sayWorld();

//Q7
user.birthday = '2000-09-27';
console.log(user.birthday);

user.sayHello = function() {
  console.log('Hello!')
};
user.sayHello();

//Q8
let calc = {};
calc.add = function(x,y) {
  console.log(x + y);
};
calc.add(3,4);

calc.subtract = function(x,y) {
  console.log(x - y);
};
calc.subtract(17,7);

calc.multiply = function(x,y) {
  console.log(x * y);
};
calc.multiply(7,7);

calc.divide = function(x,y) {
  console.log(x / y);
};
calc.divide(40,8);

//Q9 *
function remainder(x,y) {
  let rem = x % y;
  return rem;
}

let num1 = 5;
let num2 = 3;

console.log(num1 + 'を' + num2 + 'で割った余りは' + remainder(num1,num2) + 'です。');

//Q1
//変数xは、関数fooの中でのみスコープが有効となっているため、関数fooの外では参照できない。


//応用編
//Q1
let ran = Math.floor(Math.random() * (9 + 1));
console.log(ran);

//Q2-1
setTimeout(function() {
  console.log('Hello World!');
},3 * 1000)

//Q2-2
function printName(firstName, formatter) {
  console.log(formatter(firstName));

}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('北川',addIntro);

//Q3
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];

  if (typeof value !== 'number') {
    console.log(`${value}: not number`);
  } else if (value % 2 === 0) {
    console.log(`${value}: even`);
  } else {
    console.log(`${value}: odd`);
  }
}