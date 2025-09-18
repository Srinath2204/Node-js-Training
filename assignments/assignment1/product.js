class Product {
    constructor(name, price) {
        Object.defineProperty(this, 'name', {
            value: name,
            writable: false,
            configurable: false,
            enumerable: true
        });
        this.price = price;
    }
}

export default Product;