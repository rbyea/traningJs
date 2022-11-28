const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
};
const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
    let allPrice = 0;
    let priceDiscount = 0;

    for (const shoppingBagArrayElement of shoppingBagArray) {
        let shoppingId = shoppingBagArrayElement.productId;
        let shoppingCount = shoppingBagArrayElement.count;
        let groceriesPrice = groceries[shoppingId].price;
        let groceriesDiscount = groceries[shoppingId].discount;

        allPrice += groceriesPrice * shoppingCount
        if(groceriesDiscount > 0) {
            priceDiscount += groceriesPrice * shoppingCount * groceriesDiscount / 100
        }
    }

    let result = allPrice - priceDiscount

    return +result.toFixed(2)
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05