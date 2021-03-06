/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subject {
    /* method */
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
    /* method */
    getAvailableTeacher(): string {
      const check = this.teacher.experienceTeachingJava;
      if (typeof check === 'number' && check > 0) {
        return 'Available Teacher: ${this.teacher.firstName}';
      } else {
        return 'No available teacher';
      }
    }
  }
}
