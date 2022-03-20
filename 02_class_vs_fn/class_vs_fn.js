// ***********************
const paul = {
    firstName: 'Paul',
    lastName: 'McCartney',
    band: 'The beatles'
}

// ***********************
function Rockstar(firstName, lastName, band) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.band = band;
}

const paul = new Rockstar('Paul', 'McCartney', 'The beatles');

// ***********************
class Rockstar {

    constructor(firstName, lastName, band) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.band = band;
    }

}

const paul = new Rockstar('Paul', 'McCartney', 'The beatles');


class PlainPerson extends Rockstar {

    constructor(firstName, lastName, band) {
        super(firstName, lastName, band)
    }
}

// ***********************

// Pure function
function getFullName(firstName, lastName) {
    return firstName, lastName;
}

// Method on a class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + this.lastName;
    }
}
