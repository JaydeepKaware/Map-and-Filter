// 1.	Given an array of numbers, use .map() to return a new array where each number is multiplied by 3.
// const numbers = [2, 4, 6, 8];
// Expected output: [6, 12, 18, 24]

const array = [2, 4, 6, 8];
console.log(array.map((elem) => elem * 3));

// 2.	Given an array of strings, use .map() to return a new array where each string is converted to uppercase.
// const words = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]

const words = ["hello", "world", "javascript"];
console.log(words.map((elem) => elem.toUpperCase()));

// 3.	Given an array of numbers, return an array where each number is replaced by its square.
// const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]

const numbers = [1, 2, 3, 4];
console.log(numbers.map((elem) => elem * elem));

// 4.	Given an array of names, use .map() to add the prefix “Mr. “ to each name.
// const names = ["John", "Mike", "Sam"];
// Expected output: ["Mr. John", "Mr. Mike", "Mr. Sam"]

const names = ["John", "Mike", "Sam"];
console.log(names.map((elem) => "Mr. " + elem));

// 5.	Given an array of objects representing students with name and marks, return an array with only their marks increased by 5
// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 75 },
// ];
// Expected output: [85, 80]

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 75 },
];
console.log(students.map((elem) => elem.marks + 5));

// 6.	Given an array of numbers, use .map() to convert them into strings.
// const numbers = [1, 2, 3, 4];
// Expected output: ["1", "2", "3", "4"]

const nums = [1, 2, 3, 4];
console.log(nums.map((elem) => elem.toString()));

// 7.	Given an array of product objects with name and price, return an array where prices are increased by 10%.
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 }
// ];
// Expected output: [{ name: "Laptop", price: 1100 }, { name: "Phone", price: 550 }]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
const ans = products.map((elem) => {
  `${(elem.price += elem.price / 10)}`;
  return elem;
});
console.log(ans);

// 8.	Given an array of numbers, use .map() to return an array of boolean values where true represents even numbers and false represents odd numbers.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: [false, true, false, true, false]

const arr = [1, 2, 3, 4, 5];
console.log(arr.map((elem) => (elem % 2 == 0 ? true : false)));

// 9.	Given an array of words, return a new array where each word’s first letter is capitalized.
// const words = ["apple", "banana", "cherry"];
// Expected output: ["Apple", "Banana", "Cherry"]

let str = ["apple", "banana", "cherry"];
console.log(str.map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)));

// 10.	Given an array of temperatures in Celsius, use .map() to convert them into Fahrenheit.
// const celsiusTemps = [0, 20, 30, 40];
// Expected output: [32, 68, 86, 104]

const celsiusTemps = [0, 20, 30, 40];
console.log(celsiusTemps.map((elem) => (elem * 9) / 5 + 32));

// 1.	Given an array of numbers, use .filter() to return a new array containing only numbers greater than 10.
// const numbers = [5, 10, 15, 20, 25];
// Expected output: [15, 20, 25]

const arr2 = [5, 10, 15, 20, 25];
console.log(arr2.filter((elem) => elem > 10));

// 2.	Given an array of words, use .filter() to return only the words with more than 4 letters.
// const words = ["car", "bicycle", "bus", "train"];
// Expected output: ["bicycle", "train"]

const str2 = ["car", "bicycle", "bus", "train"];
console.log(str2.filter((elem) => elem.length > 4));

// 3.	Given an array of objects representing people with name and age, return an array of people who are 18 or older.
// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 15 },
// ];
// Expected output: [{ name: "Bob", age: 20 }]

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
];
console.log(people.filter((elem) => elem.age > 18));

// 4.	Given an array of numbers, filter out all the odd numbers.
// const numbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

const arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3.filter((elem) => elem % 2 === 0));

// 5.	Given an array of product objects with name and price, return only the products that cost less than 50.
// const products = [
//   { name: "Notebook", price: 30 },
//   { name: "Bag", price: 100 },
//   { name: "Pen", price: 10 }
// ];
// Expected output: [{ name: "Notebook", price: 30 }, { name: "Pen", price: 10 }]

const product = [
  { name: "Notebook", price: 30 },
  { name: "Bag", price: 100 },
  { name: "Pen", price: 10 },
];
console.log(product.filter((elem) => elem.price < 50));

// 6.	Given an array of emails, filter out those that do not contain “@”.
// const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// Expected output: ["john.doe@gmail.com", "hello@world.com"]

const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
console.log(emails.filter((elem) => elem.includes("@")));

// 7.	Given an array of numbers, filter out only the prime numbers.
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 3, 5, 7]

const arr4 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr4.filter((elem) => {
  for (let i = 2; i <= Math.sqrt(elem); i++) {
    if (elem % i == 0) return false;
  }
  return true;
});
console.log(result);

// 8.	Given an array of students with name and marks, return an array of students who scored more than 75.
// const student = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 70 },
//   { name: "Charlie", marks: 90 }
// ];
// Expected output: [{ name: "Alice", marks: 80 }, { name: "Charlie", marks: 90 }]

const student = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 70 },
  { name: "Charlie", marks: 90 },
];
console.log(student.filter((elem) => elem.marks > 75));

// 9.	Given an array of mixed data types, use .filter() to return only the strings.
// const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
// Expected output: ["hello", "world", "JavaScript"]

const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
console.log(mixedArray.filter((elem) => typeof elem == "string"));

// 10.	Given an array of objects representing tasks with title and completed (boolean), return only the completed tasks.
// const tasks = [
//   { title: "Learn JavaScript", completed: true },
//   { title: "Learn Python", completed: false },
//   { title: "Learn React", completed: true }
// ];
// Expected output: [{ title: "Learn JavaScript", completed: true }, { title: "Learn React", completed: true }]

const tasks = [
  { title: "Learn JavaScript", completed: true },
  { title: "Learn Python", completed: false },
  { title: "Learn React", completed: true },
];
console.log(tasks.filter((elem) => elem.completed == true));
