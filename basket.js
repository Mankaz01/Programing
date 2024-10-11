function totalCost(basket, price) {
    let totalCost = 0;
    for (let product in basket) {
        if (price.hasOwnProperty(product)) {
            totalCost += basket[product] * price[product];
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
    "apple": 0.40,
    "mango": 0.70,
    "bannana": 0.65
};

const result = totalCost(basket, price);
alert(result); // This should display the float correctly
