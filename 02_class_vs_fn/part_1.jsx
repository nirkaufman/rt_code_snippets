/** SLIDE #5 **/ 
/**************************** */

const paul = {
  firstName: 'Paul',
  lastName: 'McCartney',
  band: 'The beatles'
}

/** SLIDE #7 **/ 
/**************************** */

function Rockstar(firstName, lastName, band) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.band = band;
  }

const paul = new Rockstar('Paul', 'McCartney', 'The beatles');

/** SLIDE #9 **/ 
/**************************** */

class Rockstar {

  constructor(firstName, lastName, band) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.band = band;
  }

}

const paul = new Rockstar('Paul', 'McCartney', 'The beatles');

/** SLIDE #11 **/ 
/**************************** */

class PlainPerson extends Rockstar {

  constructor(firstName, lastName, band) {
      super(firstName, lastName, band)
  }
}

/** SLIDE #13 **/ 
/**************************** */

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