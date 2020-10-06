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

class HumanAdvanced extends Human {
    say(){
        console.log('I am ' + this.name + '. Thanks.');
    }
}
const Taro =  new Human('Taro');
const Hanako =  new HumanAdvanced('Hanako');

Taro.say(); // Hello, My name is Taro
Hanako.say(); // I am Hanako. Thanks.