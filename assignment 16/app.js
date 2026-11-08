// Assignment 16 - findAbsoluteValue
function findAbsoluteValue(num) {
    if (num < 0) {
        return num * -1;
    } else {
        return num;
    }
}

console.log(findAbsoluteValue(-10));
console.log(findAbsoluteValue(10));
