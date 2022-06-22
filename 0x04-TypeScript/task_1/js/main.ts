/* teachers interface */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
}
/* directors interface */
interface Directors extends Teacher {
  numberOfReports: number;
}

/* teacher */
const teacher1: Teacher = {
  firstName: 'Frank',
  lastName: 'Donald',
  fullTimeEmployee: true,
  location: 'New Jersey',
  contract: false,
}
console.log(teacher1);

/* director */
const director1: Directors = {
  firstName: 'John',
  lastName: 'Smith',
  location: 'America',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/* teacher function */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;

}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;
console.log(printTeacher('john', 'Doe'));

/* student class */
interface studentClassInterface {
  firstName: string;
  lastName: string;
}

interface constructorInterface {
  new(firstName: string, lastName: string): studentClassInterface;
}

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}