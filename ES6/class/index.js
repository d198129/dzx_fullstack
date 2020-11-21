// class Foo {
//     constructor() {

//     }
//     static bar() {
//         this.baz();
//     };
//     // static baz() {
//     //     console.log('hello');
//     // }
//     baz() {
//         console.log('world');
//     }
// }
// let foo = new Foo();
// foo.baz()

class Shape {
    constructor() {
        this._width = width;
        this._height = heigth;
        // this.area = width * heigth
    }
    get area() {
        return this._width * this._height;
    }
}
const square = new Shape(10, 10);
console.log(square.area);