// Assignment 12 - getGrade
function getGrade(score) {
    if (score >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(getGrade(75));
console.log(getGrade(30));
