const object = {
    a : 1,
    getA(){
        return this;
    }
}

console.log("Adding new context using call", object.getA.call({test : 123}));
console.log(object.getA());

const getARef = object.getA;

const newGetA = getARef.bind({test1 : 456});

console.log("Adding new contect using bind", newGetA());

