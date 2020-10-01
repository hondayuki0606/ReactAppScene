// コード2.2.1.1:varによる変数定義の挙動

// 従来の変数定義
var foo = 0;

function func(){
    if (true){
        var foobar = 'foobar';
    }

    // 関数スコープなのでfunc()内なら参照できる
    console.log(foobar); // foobar
}
func();