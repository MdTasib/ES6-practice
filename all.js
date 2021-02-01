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