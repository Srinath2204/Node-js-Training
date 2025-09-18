class Product{
    constructor(name, price){
        Object.defineProperty(this, 'name',{
            value : name,
            writable: false,
            configurable : false,
            enumerable : true
        })
        this.price = price;
    }
}

class ShoppingCart{
    constructor(){
        this.products = []
    }
    add(product){
        this.products.push(product);    this
    }
    remove(product){
        this.products = this.products.filter((p)=> p.name != product.name)
    }
    calculateTotalPrice(){
        return this.products.reduce((total, product)=>total + product.price, 0)
    }
}

const product1 = new Product('IPhone', 70000);
const product2 = new Product('Pixel', 60000);
const product3 = new Product('Dell laptop', 90000);

const cart = new ShoppingCart();

cart.add(product1);
cart.add(product2);
cart.add(product3);

console.log('Total Price: ', cart.calculateTotalPrice());

cart.remove(product3);

console.log('Total Price: ', cart.calculateTotalPrice());