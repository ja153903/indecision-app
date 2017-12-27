// arguments object - no longer bound with arrow functions
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
// console.log(add(3, 4, 1001));

// we no longer can add random parameters into the function as we have no more
// access to arguments
const addArrow = (a, b) => a + b;

// this keyword - no longer bound with arrow functions

// in es5, we use the this operator to access member variables
const user = {
    name: 'Jaime',
    cities: ['Singapore', 'Manila', 'New York'],
    printPlacesLived: function() {
        const that = this; // workaround to get this keyword to bind to the values
        console.log(this.name, this.cities);
        this.cities.forEach(function(city) {
            // this doesn't work if we use this.name
            // however this works with an arrow function.
            console.log(`${that.name} has lived in ${city}`);
        })
    }
};

const userArrow = {
    name: 'Jaime',
    cities: ['Singapore', 'Manila', 'New York'],
    printPlacesLived: function() {
        this.cities.forEach( city => console.log(`${this.name} has lived in ${city}`));
    }
}
// However, if we use an arrow function for printPlacesLived, we would lose access to this keyword
// user.printPlacesLived();
// userArrow.printPlacesLived();

// a new way to clean this up is the following
const userArrow2 = {
    name: 'Jaime',
    cities: ['Singapore', 'Manila', 'New York'],
    printPlacesLived() {
        return this.cities.map(city => `${this.name} has lived in ${city}`);
        // this.cities.forEach( city => console.log(`${this.name} has lived in ${city}`));
        // return cityMessages;
    }
}

console.log(userArrow2.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());