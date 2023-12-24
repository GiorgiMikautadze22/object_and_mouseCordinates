//1. დავწეროთ ფუნქცია რომელიც მოგვცემს Object.entries() მსგავს შედეგს.
//input {a:1, b:2}
//output [['a', 1], ['b',2]]

const input = { a: 1, b: 2, c: 3 };
const output = [];

function objectEntries(obj) {
  for (let key in obj) {
    output.push([key, obj[key]]);
  }
  console.log(output);
}

objectEntries(input);

//2. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
//ფუნქციამ უნდა დააბრუნოს ყველა ფორფერთი სტრინგების მასივად
//input {a: 1, b:2}
//output ['a','b']
//არ გამოვიყენოთ Object.keys() ფუნქცია.

const input1 = { a: 1, b: 2, c: 3 };
let keys = [];

function objectKeys(obj) {
  for (let key in obj) {
    keys.push(key);
  }
  console.log(keys);
}

objectKeys(input1);

/*
3. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
ფუნქციამ უნდა დააბრუნოს ყველა ფროფერთის მნიშვნელობა მასივად
input {a: 1, b:2}
output [1,2]
არ გამოვიყენოთ Object.values() ფუნქცია.
*/

const input2 = { a: 1, b: 2, c: 3 };
let values = [];

function objectValues(obj) {
  for (let key in obj) {
    values.push(obj[key]);
  }
  console.log(values);
}

objectValues(input2);

//დაწერეთ ფუნქცია რომელიც დალოგავს მაუსის კოორდინატებს მხოლოდ მაუსის გაჩერების შემდეგ

const mouseCordinates = debouncer(console.log, 300);
document.onmousemove = function (e) {
  mouseCordinates(e.pageX, e.pageY);
};

function debouncer(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
}
