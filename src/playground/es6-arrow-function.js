const square = function(x) {
    return x * x;
}

const squareArrow = x => x * x;

console.log(square(5));
console.log(squareArrow(5));

// Challenge - Use arrow functions
// getFirstName(fullName) -> firstName

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName("Jaime Abbariao"));