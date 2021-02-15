// // Template String in Javascript
// let name = 'OH Tasib';
// let age = 19;

// console.log(`My name is ${name} and i am ${age} years old..`);
// console.log(`I am ${age < 18 ? 'not ' : ''}adult`);
// console.log(name.padStart(10, '*'));
// console.log(name.padEnd(10, '/'));
// console.log(`${name.repeat(10)}`);

// // spread operator useing Object and Array
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arrSum = arr.reduce((a, b) => a + b);
// console.log(arr);
// console.log(...arr);
// console.log(arrSum);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }
// console.log(obj);
// let obj2 = { ...obj };
// console.log(obj2);

// // Enhance Object in Javascript
// // (1)
// let a = 10, b = 20;
// let obj = {
//     a: a,
//     b: b,
//     print: function () {
//         console.log('hello')
//     }
// }
// console.log(obj)
// obj.print()

// // (2)
// let c = 11, d = 22;
// let obj2 = {
//     c,
//     d,
//     print() {
//         console.log('hello')
//     }
// }
// console.log(obj2)
// obj2.print()

// // Destructuring in Javascript
// // object
// // (1)
// // const obj = {
// //     name: 'tasib',
// //     age: 19,
// //     address: {
// //         phone: +00122345,
// //         gmail: 'mdtasib442@gmail.com'
// //     }
// // }
// // console.log(obj);
// // console.log(obj.name);
// // console.log(obj.address);
// // console.log(obj.address.phone);
// // console.log(obj.address.gmail);

// // (2)
// const obj = {
//     name: 'tasib',
//     age: 19,
//     address: {
//         phone: 12221,
//         gmail: 'ohidulalam442@gmail.com'
//     }
// }
// const { name, age, address: { gmail } } = obj;
// console.log(name, age, gmail);

// // array
// // (1)
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr1[5]);
// // (2)
// const arr = [1, 2, 3, 4, 5, 6];
// // const [protom, ditio] = arr;
// const [protom, ditio, , , , last] = arr;
// console.log(protom, ditio, last);

// // Object From Entries in Javascript
// // convert object to array
// const obj = {
//     a: 10,
//     b: 20
// }
// console.log(obj);
// console.log(Object.entries(obj));
// // convert array to object
// const arr = [
//     ['a', 10],
//     ['b', 20]
// ]
// console.log(arr);
// console.log(Object.fromEntries(arr));

/*
// Iterator Basics in Javascript old way
const arr = [1, 2, 3];

function createIterator(collaction) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= collaction.length,
                value: collaction[i++]
            }
        }
    }
}
let iterator = createIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
// Iterator with Symbol in Javascript es6
// (1)
const arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// (2)
const text = 'Tasib';
let textIterator = text[Symbol.iterator]();
console.log(textIterator.next());
console.log(textIterator.next());
console.log(textIterator.next());
console.log(textIterator.next());
console.log(textIterator.next());
console.log(textIterator.next());
*/

// // for of loop
// const arr = [1, 2, 3, 4, 5];
// for (let v of arr) {
//     console.log(v);
// };
// const text = 'tasib';
// for (let v of text) {
//     console.log(v);
// };

// // Generators in Javascript
// const arr = [1, 2, 3];
// function* generator(collaction) {
//     for (let i = 0; i <= collaction.length; i++) {
//         yield collaction[i];
//     }
// }
// let generatorArr = generator(arr);
// console.log(generatorArr.next());
// console.log(generatorArr.next());
// console.log(generatorArr.next());
// console.log(generatorArr.next());

// // // Set in Javascript
// const arr = [1, 2, 3, 4, 5];
// let set = new Set(arr);
// set.add(6);
// set.delete(1);
// console.log(set);

// const arr2 = [1, 2, 3, 4, 5, 1, 2, 3];
// console.log(new Set(arr2));

// const arr3 = [1, 2, 3];
// const setarr3 = new Set(arr3).keys();
// console.log(setarr3.next());
// console.log(setarr3.next());
// console.log(setarr3.next());
// console.log(setarr3.next());

// Class in Javascript
// (1)
// function Ractangle(width, height) {
//     this.width = width;
//     this.height = height;
// }

// Ractangle.prototype.draw = function () {
//     console.log(this);
//     console.log('Drawing...');
// }

// let ract1 = new Ractangle(10, 20);
// console.log(ract1)

// (2)
// class Ractangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }
// let ract1 = new Ractangle(11, 22);
// console.log(ract1);
// console.log(typeof Ractangle);

// // Inheritance in ES6 in Javascript
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Ractangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width;
//         this.height = height;
//     }
//     calculate() {
//         return this.width * this.height;
//     }
// }
// let ract = new Ractangle('Red', 5, 6);
// console.log(ract);
// ract.draw();

// // Inheritance in ES6 in Javascript
// // method overriding
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Ractangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width;
//         this.height = height;
//     }
//     draw() {
//         console.log('Drawing a ractangel....')
//     }
//     calculate() {
//         return this.width * this.height;
//     }
// }
// let ract = new Ractangle('Red', 5, 6);
// console.log(ract);
// ract.draw();

// Array methods map filter find forEach
// let products = [
//     { id: 1, name: 'laptop', price: 500 },
//     { id: 2, name: 'mobile', price: 401 },
//     { id: 3, name: 'tablat', price: 300 },
//     { id: 4, name: 'watch', price: 200 },
// ]
/*
// map
const productsName = products.map(productName => productName.name);
console.log(productsName);
const productsPrice = products.map(productPrice => productPrice.price);
console.log(productsPrice);
const productsId = products.map(id => { // jodi multiline na hoi tahole return korte hobe.
    // id.id; // undifine
    return id.id; // 1,2,3,4
})
console.log(productsId);
*/

// forEach
// products.forEach(productName => console.log(productName.name));

/*
// filter
let lowPriceProduct = products.filter(product => product.price < 400);
console.log(lowPriceProduct);
// remove an item useing filter
const remain = lowPriceProduct.filter(product => product.name !== 'watch');
console.log(remain);

const remaining = products.filter(product => product.name !== 'tablat');
console.log(remaining);
*/

// find
// const hasWatch = products.find(OnlyWatch => OnlyWatch.name == 'watch');
// console.log(hasWatch);

// Error Handling with If Else in Javascript
const changeToInt = (value) => {
    let result = Number.parseInt(value);
    if (!result) {
        return 'not a valid number';
    } else {
        return result;
    }
}
console.log(changeToInt('444'));
console.log(changeToInt('hellow'));

// Error Handling with Try Catch in Javascript
// (1)
// const markWord = (text) => {
//     let str = text.trim();
//     let word = str.split(' ');
//     return word;
// }
// let words = markWord('    I am Tasib     ');
// console.log(words);
// let number = markWord(34);
// console.log(number);

// (2)
// const markWord = (text) => {
//     try {
//         let str = text.trim();
//         let word = str.split(' ');
//         return word;
//     } catch (error) {
//         // (1)
//         // console.log(error);
//         // (2)
//         console.log('Please provide a valid string');
//     }
// }
// let words = markWord('    I am Tasib     ');
// console.log(words);
// let number = markWord(34);
// console.log(number);

// // Throwing an Error in Javascript
// // (1)
// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     console.log('I am line 3');
//     console.log('I am line 4');
// } catch (err) {
//     console.log(err.message);
// };
// console.log('Number One Example End');
// // (2)
// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     throw new Error('I am error');
//     console.log('I am line 3');
//     console.log('I am line 4');
// } catch (err) {
//     console.log(err.message);
// };

// // Finally Block in Javascript
// // (1)
// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     console.log('I am line 3');
//     console.log('I am line 4');
// } catch (err) {
//     console.log(err.message);
// } finally {
//     console.log('I am finally method');
// };
// console.log('Number One Example End');
// // (2)
// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     throw new Error('I am error');
//     console.log('I am line 3');
//     console.log('I am line 4');
// } catch (err) {
//     console.log(err.message);
// } finally {
//     console.log('I am finally method');
// };

// // optional catch binding in javascript
// try {
//     console.log('1');
//     console.log('2');
//     throw new Error('')
//     console.log('3');
// } catch{
//     console.log('i am error');
// } finally {
//     console.log('i am finally');
// }