// コード2.2.1.2:新しい変数定義

// 従来の変数定義
let bar = 1;
const baz = 2;

function func(){
    if (true){
        let foobar1 = 'foobar1';
        const foobar2 = 'foobar2';
    }

    // ブロックスコープなのでif文の外では参照できない
    //console.log(foobar1); // referenceError: foobar1 is not defined
    //console.log(foobar2); // referenceError: foobar2 is not defined
    console.log(bar); // 1
}
func();