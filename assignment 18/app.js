// Assignment 18 - getTriangleType
function getTriangleType(side1, side2, side3) {
    if (side1 == side2 && side2 == side3) {
        return "Equilateral";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(getTriangleType(5, 5, 5));
console.log(getTriangleType(5, 5, 3));
console.log(getTriangleType(4, 5, 6));
