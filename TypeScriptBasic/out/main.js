"use strict";
// function log(message: string): void {
//     console.log(message);
// }
// var message = "Hello Angular From BKD03K11";
// log(message);
/*2. variables */
// let, const (var) //
// usingVar();
// function usingVar(){
//     for (let i = 0; i < 3; ++i) {
//         console.log(i);
//     }
//     // console.log("Finally: " +i);
//     // usingVar();
// }
// let a; //any
// let b: boolean; //boolean
// let c:string; //string
// let d:any; //any
// let e:number[] = []; //number
// e[0] = 10;
// e.push(20);
// console.log(e[1]);
// let f: any[] = [1, true,"phong handsome", 10.5];
// //enum
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color {Red = 0, Green = 1, Blue = 2};
// let background: Color = Color.Red;
// /*2.4 type assertion*/
// let message;
// message = "hello Phong Handsome";
// message.toUpperCase();
// //ép kiểu String
// (message as string).toUpperCase();
// (<string>message).toUpperCase();
/* 2.5 : arrow function*/
// let log = function(message: string){
//     console.log(message);
// }
// let log1 = (message: string)=>{
//     console.log(message);
// }
// let log2 = (message: string) => console.log(message);
// log2("Hello Phong Handsomes");
/*2.6 interface */
// interface types
// let drawPoly = (point: {x: number, y: number}) =>{
//     //code
// };
// interface Point {
//     x: number,
//     y: number
// };
// let drawPoly2 = (point: Point) => {
//     //code
// };
/* classes */
// class Point {
//     x!: number;
//     y!: number;
//     draw(){
//         //....
//         console.log("Drawing somethings");
//         console.log('X: ' +this.x + ' Y: ' + this.y);
//     }
//     anotherFunction(another: Point){
//         //...
//         console.log("Another");
//     }
// }
// let point = new Point();
// point.draw();
// point.anotherFunction(new Point());
/*2.8: Constructors - Hàm tạo  */
// class Point {
//     x: number;
//     y: number;
//     constructor(x?: number, y?: number) {
//         this.x = x || 0;
//         this.y = y || 0;
//     }
//     draw() {
//         console.log('X:' + this.x + ', Y:' + this.y);
//     }
// }
// let point = new Point(1, 2);
// point.draw();
// let point2 = new Point();
// point2.draw();
/* Properties with get, set */
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        //code...
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) { this._x = value; },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
;
var point = new Point(10, 20);
point.draw();
console.log(point.x);
//# sourceMappingURL=main.js.map