class Cart {
    constructor() {
        this.products = new Map();
    }

    add(product) {
        this.products.set(product.name, product);
    }

    remove(productName) {
        const initialLength = this.products.size;
        this.products.delete(productName);
        return initialLength !== this.products.size;
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products.values()){
            totalPrice += product.price;
        }
        return totalPrice
    }

    getTotalItems() {
        return this.products.size;
    }
}

export default Cart;