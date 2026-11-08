// Assignment 20 - isPasswordValid
function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Too Short";
    }
}

console.log(isPasswordValid("javascript"));
console.log(isPasswordValid("hello"));
