// Assignment 19 - calculateDiscountedPrice
function calculateDiscountedPrice(price, discountPercentage) {
    let discount = price * discountPercentage / 100;
    let discountedPrice = price - discount;

    return discountedPrice;
}

console.log(calculateDiscountedPrice(1000, 20));
