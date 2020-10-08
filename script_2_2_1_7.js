// 配列をそれぞれの変数へ格納
let a,b
[a,b] = [1,2];
console.log(a); // 1
console.log(b); // 2

// 定義されたオブジェクトから相当する名前の変数へまとめて展開
const list = {
    foo:1,
    bar:2,
    baz:3
};
const {foo,bar,baz} = list;
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3
