function foo(a, b){
    console.log('outer', this);
    function inner(){
        console.log('inner', this);
    }
    inner();
}

let cts = {};
cts.foo = foo;
cts.foo();