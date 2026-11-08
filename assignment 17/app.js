// Assignment 17 - checkTemperature
function checkTemperature(temperature) {
    if (temperature > 30) {
        return "Hot";
    } else if (temperature < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}

console.log(checkTemperature(35));
console.log(checkTemperature(5));
console.log(checkTemperature(20));
