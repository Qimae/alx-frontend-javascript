/* director interface */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workDirectorTasks(): string;
}
/* teacher interface */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workTeacherTasks(): string;
}

/* director class */
class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home'
  }

  getCoffeebreak(): string {
    return 'Geting a coffee break'
    
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

/* teacher class */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeebreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}
console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));
