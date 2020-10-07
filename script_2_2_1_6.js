var name = 'Taro';

// 従来の方法
var message = 'Hello, My name is' + name + '.';
console.log(message);

// テンプレートリテラルを用いた手法
// 変数は ＄{} で記述する（実行結果は同じ）
const message2 = 'Hello, My name is ${name}.';
const message3 = '
I am ${name}.
Thanks.
';

console.log(message2);
console.log(message3);