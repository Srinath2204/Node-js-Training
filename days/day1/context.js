function foo(a, b){
    console.log('outer', this);
    function inner(){
        console.log('inner', this); // context of this is global object
    }
    const outer = this;
    function inner1(){
        console.log('Inner function with wrapping object context', outer);
    }
    inner();
    inner1();
}

let cts = {};
cts.foo = foo;
cts.foo(); // context is cts object

foo(); // context is global object

const customContext = {name : 'Srinath'};
foo.apply(customContext, [1,2, 3]) // context is customContext object
foo.call(customContext, 1,2,3); // context is customContext onject

// Diffference between call and apply is, in apply we pass arguments in array
// Arrow functions doesn't have any context

const arrowContext = ()=> {
    console.log("Context of this in arrow function", this);
}
arrowContext();