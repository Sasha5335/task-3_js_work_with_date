'use strict'

class User {
   constructor(name, surname) {
      this.name = name;
      this.surname = surname;
   }

   getFullName() {
      return `${this.name} ${this.surname}`;
   }
}

class Student extends User {
   constructor(name, surname, year) {
      super(name, surname, year);
      this.year = year;
   }

   getCourse() {
      const thisYear = new Date().getFullYear();
      const course = thisYear - this.year.getFullYear();

      if (course > 5 || course < 0) {
         throw RangeError('You are not a student yet!');
      }
      if (+course === 0) {
         return `Your corse ${1}`;
      }
      return `Your corse ${course}`;
   }
}


const student = new Student('Test', 'Testovich', new Date('2021'));
