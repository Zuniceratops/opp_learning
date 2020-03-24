

let a = 'Ivan';
let b = '77fdghjk77';

const person = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassword());

let firstStudent = new Student(a, b, 'I123'); 
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());