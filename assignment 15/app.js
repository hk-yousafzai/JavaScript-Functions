// Assignment 15 - isEligibleToVote
function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(isEligibleToVote(20));
console.log(isEligibleToVote(16));
