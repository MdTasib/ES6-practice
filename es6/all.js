// function use
// 1
// function doubleIt(number) {
//     return number * 2;
// }
// 2
// const doubleIt = function (number) {
//     return number * 2;
// }
// 3
// const doubleIt = function myFunc(number) {
//     return number * 2;
// }
// 4
// const doubleIt = number => number * 2;
// console.log(doubleIt(2)); // 4

// 5
// const add = (x, y) => x + y;
// console.log(add(5, 5)) // 10
// 6
// const add = (x, y) => {
//     const sum = x + y;
//     const sub = x - y;
//     const result = sum * sub;
//     return result;
// }
// console.log(add(5, 5)); // 0

// Spread operator, concatenate multiple arrays, array max

// // 1
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];
// const arr3 = [10, 11, 12];
// const arr = arr1.concat(arr2).concat(arr3);
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// // 2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];
// const arr3 = [10, 11, 12];
// const arr = [...arr1, ...arr2, ...arr3];
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// array max
// 1
// const one = 1;
// const two = 2;
// const three = 3;
// const maxNumber = Math.max(one, two, three);
// console.log(maxNumber); // 3

// 2
// const number = [1, 2, 3];
// // const maxNumber = Math.max(number);// NaN
// const maxNumber = Math.max(...number); // 3
// console.log(maxNumber);

// Class, constructor, create object from class
// 1
// class Student {
//     constructor() {
//         this.roll = 12;
//         this.name = 'Ohidul';
//     }
// }
// const student1 = new Student();
// console.log(student1);
// const student2 = new Student();
// console.log(student2);

// 2
// class Student {
//     constructor(roll, name) {
//         this.roll = roll;
//         this.name = name;
//         this.school = 'Fatickchari Coronation';
//     }
// }
// const student1 = new Student(22, 'Ohidul');
// console.log(student1);
// const student2 = new Student(33, 'Tasib');
// console.log(student2);

// 3
// Inheritance, extends class, super, class method
// class Parent {
//     constructor() {
//         this.fatherName = 'Thidul';
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
//     getFullName() {
//         return `${this.fatherName} and ${this.name}`;
//     }
// }
// const tasib = new Child('tasib');
// console.log(tasib);
// console.log(tasib.getFullName());
// const rafi = new Child('rafi');
// console.log(rafi.name);

// Destructure, Object, array, destructure complex object
// const person = { name: 'tasib', age: 19, profession: 'developer', brother: ['rafi', 'rakib', 'tawrat'] };
// const { name, age } = person;
// console.log(name, age);

// nested Object destructure
// const person = {
//     name: 'rafi',
//     info: {
//         age: 22,
//         profession: 'programmer'
//     }
// }
// const { age } = person.info;
// console.log(age);

// array destructure
// const friends = ['tasib', 'rafi', 'rakib', 'tawrat', 'homaira', 'majid'];
// const [firstFriend, secondFriend] = friends;
// console.log(firstFriend, secondFriend);
// const [...allFriends] = friends;
// console.log(allFriends);
// console.log(...allFriends);