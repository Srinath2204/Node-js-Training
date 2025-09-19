const EventEmitter = require("events");

class ShoppingCart extends EventEmitter {
    constructor(){
        super();
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
        this.emit('itemAdded', item);
    };
    removeItem(item){
        const itemId = this.items.indexOf(item);
        if(itemId > -1){
            this.items.splice(itemId, 1);
            this.emit('itemRemoved', item)
        }
    }
}
const cart = new ShoppingCart();

cart.on('itemAdded', (item) => {
    console.log(`Item Added ${item}`);
})
cart.on('itemRemoved', (item) => {
    console.log(`Item Removed ${item}`);
})

cart.addItem('Apple');
cart.addItem('Banana');
cart.removeItem('Apple');

