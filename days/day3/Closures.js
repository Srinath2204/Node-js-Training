function outer(){
    let count = 0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function multiplier(factor){
    return function multiply(num){
        console.log('Inside loop', factor, num)
        return num * factor;
    }
}

const doubleMultipler = multiplier(5);
console.log(doubleMultipler(2));
