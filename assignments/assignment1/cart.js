class Cart {
    constructor() {
        this.products = new Map();
    }

    add(product, quantity) {
        if(this.products.has(product.name)){
            const existingProduct = this.products.get(product.name);
            existingProduct.quantity += quantity;
        }
        else {
            product.quantity = quantity;
            this.products.set(product.name, product);
        }
    }

    remove(productName, quantity) {
        const initialLength = this.products.size;
        let productToBeDeleted = this.products.get(productName);
        if(productToBeDeleted.quantity === quantity){
            this.products.delete(productName);
        }
        else{
            productToBeDeleted.quantity = productToBeDeleted.quantity - quantity;
        }

        return initialLength !== this.products.size;
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products.values()){
            totalPrice += product.price * product.quantity;
        }
        return totalPrice;
    }

    getTotalItems() {
        return this.products.size;
    }

    getTotalQuantity() {
        let totalQuantity = 0;
        for (let product of this.products.values()){
            totalQuantity += product.quantity;
        }
        return totalQuantity;
    }

    getItemDetails(){
        let productDetails = [];
        for(let product of this.products.values()){
            productDetails.push(`Product: ${product.name}, Price: ${product.price}, Quantity:${product.quantity}`);
        }
        return productDetails;
    }
}

export default Cart;