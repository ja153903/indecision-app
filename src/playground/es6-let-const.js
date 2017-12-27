// can be reassigned, can be redefined
var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

// can be reassigned, cannot be redefined
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// cannot be redefined and redefined
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName; 
}

console.log(getPetName());

// Block scoping

const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);