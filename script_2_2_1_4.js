class Human {

    // コンストラクタ
    constructor(name){
        this.name;
    }

    // インスタンスメソッド
    say(){
        console.log('Hello, My name is' + this.name + '.');
    }
}
const Taro =  new Human('Taro');

Taro.say(); // Hello, My name is Taro