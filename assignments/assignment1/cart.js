class Cart {
    constructor() {
        this.products = [];
    }

    add(product) {
        this.products.push(product);
    }

    remove(productName) {
        const initialLength = this.products.length;
        this.products = this.products.filter((p) => p.name !== productName);
        return initialLength !== this.products.length;
    }

    calculateTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    getTotalItems() {
        return this.products.length;
    }
}

export default Cart;