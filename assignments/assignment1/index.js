import readline from "readline";
import Cart from "./Cart.js";
import Product from "./Product.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// // Global product list and cart
let productList = [];
const cartItems = new Cart();

// Menu logic
function showMenu() {
    console.log(`\nChoose an option:
1. Add a new product
2. Add product to cart
3. Remove product from cart
4. Exit
`);
    rl.question('Enter your choice (1/2/3/4): ', handleMenuChoice);
}

function handleMenuChoice(choice) {
    switch (choice.trim()) {
        case '1':
            addNewProduct();
            break;
        case '2':
            addToCart();
            break;
        case '3':
            removeFromCart();
            break;
        case '4':
            console.log('Exiting... Bye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            showMenu();
    }
}

// Option 1: Add product to product list
function addNewProduct() {
    rl.question('Enter product name: ', (name) => {
        rl.question('Enter product price: ', (price) => {
            const parsedPrice = parseFloat(price);
            if (isNaN(parsedPrice)) {
                console.log('Invalid price. Try again.');
                return showMenu();
            }

            productList.push(new Product(name, parsedPrice));
            console.log(`Product "${name}" added to product list.`);
            showMenu();
        });
    });
}

// Option 2: Add product to cart from product list
function addToCart() {
    if (productList.length === 0) {
        console.log('No products available to add. Please add products first.');
        return showMenu();
    }

    console.log('\nAvailable Products:');
    
    productList.forEach((p, i) => console.log(`${i + 1}. ${p.name} - $${p.price}`));

    rl.question('Enter the number of the product to add to cart: ', (input) => {
        const index = parseInt(input) - 1;
        if (isNaN(index) || index < 0 || index >= productList.length) {
            console.log('Invalid product number.');
            return showMenu();
        }

        const product = productList[index];
        cartItems.add(product);
        console.log(`Added "${product.name}" to cart.`);
        showCartSummary();
        showMenu();
    });
}

// Option 3: Remove product from cart
function removeFromCart() {
    if (cartItems.getTotalItems() === 0) {
        console.log('Cart is empty.');
        return showMenu();
    }
    const productsArray = Array.from(cartItems.products.values());
    console.log('\nProducts in Cart:');
    productsArray.forEach((p, i) => console.log(`${i + 1}. ${p.name} - $${p.price}`));

    rl.question('Enter the number of the product to remove from cart: ', (input) => {
        const index = parseInt(input) - 1;
        if (isNaN(index) || index < 0 || index >= cartItems.products.length) {
            console.log('Invalid product number.');
            return showMenu();
        }

        const productName = productsArray[index].name;
        const removed = cartItems.remove(productName);

        if (removed) {
            console.log(`Removed "${productName}" from cart.`);
        } else {
            console.log(`Product "${productName}" not found in cart.`);
        }

        showCartSummary();
        showMenu();
    });
}

// Utility: Show cart summary
function showCartSummary() {
    console.log(`\n Cart Summary:
Total items: ${cartItems.getTotalItems()}
Total price: $${cartItems.calculateTotalPrice().toFixed(2)}
`);
}

// Start the app
console.log('Welcome to the Shopping App!');
showMenu();
