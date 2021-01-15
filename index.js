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
		const course = new Date().getFullYear() - this.year;

		if (course + 1 === 0) {
			return `Your corse ${1}`
		}
		if (course > 5 || course < 0) {
			throw RangeError()
		}
		return `Your corse ${course}`
	}
}


const student = new Student('Test', 'Testovich', new Date().getFullYear() - 3)
