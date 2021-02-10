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
class Ractangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.another = function () { }
    }
    namw = 'tasib';
    draw() {
        console.log('Drawing...')
    }
}
let ract1 = new Ractangle(11, 22);
console.log(ract1);
console.log(typeof Ractangle);