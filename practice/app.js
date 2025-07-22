let text = 'JavaScriptの練習';
console.log(text);
// 以下を追記
text = 'JavaScriptをマスターした';
console.log(text);

let longText =
 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
console.log(longText);
console.log(longText);
console.log(longText);

let age = 23;
console.log(age);

let testText;
console.log(testText);

let again = '定義しました';
again = '再代入はできます';

const constant = 'これは定数です';

let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます";
console.log(double);

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
console.log(templateText);

let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';
console.log(numTen,strTen);

let number = 5;
number += 3;
console.log(number);

number -= 1;
console.log(number);

number *= 5;
console.log(number);

number /= 7;
console.log(number);

let increment = 0;
console.log(increment);
increment++;
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--;
console.log(decrement);

let bigNum = 25;
let smallNum = 2;
console.log(bigNum ** smallNum);

let names = ['John','Bob','Michael','Ema'];
console.log(names);
console.log('names[0] => ',names[0]);
console.log('names[1] => ',names[1]);
console.log('names[2] => ',names[2]);
console.log('names[3] => ',names[3]);
console.log('names.length => ',names.length);

let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Ema';
console.log(emptyNames,emptyNames.length);

/*let John = {
  name:'John',
  age:26,
  bloodtype:'A',
  favorite:'card',
};
console.log(John.bloodtype);
*/

let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodtype = 'B';
Andy.favorite = 'sweets';
console.log(Andy.favorite);

let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];
console.log(vehicles[1].color);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function sample(arg1, arg2, arg3) {
  let wether = arg1 + arg2 + arg3;
  console.log(wether)
}
sample('晴れ','のち曇り','最高気温29℃');

function devide(x,y) {
  if (y === 0) {
    return;
  }
  return x / y;
}

console.log('商は' + devide(10,5) + 'です');

function doFunc(callback) {
  console.log('duFuncが呼び出されました');
  callback();
}


doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});


let John = {
  name: 'John',
  age: 26,
  bloodtype: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();


let userAge = 0;
myFunc()

function myFunc() {
  userAge = 27;
  console.log(userAge);
}

console.log(userAge);


if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');


let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}


let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');



let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 16;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}


let loto = 7;
if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = '7'
let strVal = 'texts'

console.log(numVal == 7 || strVal === 'text');


let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します');
} else {
  console.log('揃っていないため、出発できません');
}

console.log(userA === '到着' && userB === '到着');


let errMsg = '';
errMsg === '' ? console.log('ない！') : console.log('ある！');


let number1 = 1;
let text1 = number1 % 2 === 0 ? '偶数です' : '奇数です';
console.log(text1);

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);