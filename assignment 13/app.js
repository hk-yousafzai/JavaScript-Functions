// Assignment 13 - isTeenager
function isTeenager(age) {
    if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Not a Teenager";
    }
}

console.log(isTeenager(16));
console.log(isTeenager(25));
