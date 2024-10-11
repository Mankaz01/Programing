function totalCostBasket(basket, price) {
    let totalCost = 0;
    for (let product in basket) {
        if (price.hasOwnProperty(product)) {
            totalCost = totalCost + (basket[product] * price[product]);
        }
    }
    return totalCost;
}

const basket = {
    "apple": 4,
    "mango": 3,
    "bannana": 2
};

const price = {
    "apple": 1.5,
    "mango": 0.70,
    "bannana": 0.65
};

const result = totalCostBasket(basket, price);
alert(result);
