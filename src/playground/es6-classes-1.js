class Person {
    constructor(fullName='John Doe', age=0) {
        this.fullName = fullName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName}`;
    }

    getDescription() {
        return `${this.fullName} is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // !!major creates a boolean value and then ensures that boolean value
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `. His major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += `. I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student("Jaime Abbariao", 23, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other);

const jaime = new Traveler("Jaime Abbariao", 23, "Singapore");
console.log(jaime.getGreeting());