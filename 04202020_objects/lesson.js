
// An object is like a name-value collection
// Each name:value pairing is called a 'property' of the object
let max = {
    firstName : 'Max', // Properties act like variables, pairing a readable name with a value
    age : 36, // 
    'lastName' : 'luper', // Property names are strings, but the quotes are optional
}

console.log(max.firstName);
console.log(max.age);

// We can set properties on an object after it has been defined like this.
max.dob = '4/18/84';
console.log(max.dob);

// When we use periods to get or set properties, we call that using 'dot-notation'
// Another alternative is 'brace-notation'. We need quotes for this
max['heightInches'] = '72';
// Dot and brace notation are just different ways of doing the same thing
console.log(max.heightInches);
console.log(max['firstName']);

// A property only has one value. By default, we can overwrite it with a new value
max.lastName = 'Luper'
console.log(max.lastName);

// Functions are fine as properties: 
max.getFullName = function() { 
    return max.firstName + ' ' + max.lastName;
}
// They get called the same way.
console.log(max.getFullName());

// As are other objects 
max.address = {
    addressLine1 : 'my street', 
    city : 'city', 
    state : 'state', 
    zip : 12345
}
console.log(max.address.city);

// Like with other objects, we can log it and view it
console.log(max);
// There's also ways of converting it to a string to read or store it
console.log(JSON.stringify(max));

// And we can pass objects around like any other variable: 
let getAddressString = function(person) { 
    let address = person.address;
    let addressString = address.addressLine1 + '\n' 
        + address.addressLine2 + '\n' 
        + address.city + ', ' + address.state + '\n'
        + address.zip;
    return addressString;
}

console.log(getAddressString(max));