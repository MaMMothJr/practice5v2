// import {x as value,
//    rnd,
//    z,
//   getName
// } from './testa.js';
//
// import Student from './testb.js';
//
// console.log('x', value);
// console.log('y', rnd);
// console.log('z', z);
//
// // console.log('hi');
// //
// // console.log(getName());
//
// let instance = new Student('Ivan');
// console.log('instance', instance);

import DB from './db.js';
import {studentListElement, updateStudentFormElement} from './variables.js';
import {appendStudent} from './tools.js';


let database = new DB ('https://frontend-lectures.firebaseio.com');

console.log('database', database);
let studentList = [];
database.getStudent().then(result => {
  studentList = Object.values(result);

  studentList.forEach(student => appendStudent(student, studentListElement));
});

studentListElement.addEventListener('click', event => {
  let target = event.target;
  if (!target.hasAttribute('data-id')) return;

  event.preventDefault();
  console.log(target);

  let studentId = target.getAttribute('data-id');
  console.log(studentId);

  database.getStudentById(studentId).then(response => {
    console.log('response', response);

    for (let key in response) {
      if (updateStudentFormElement.elements[key]) {

      updateStudentFormElement.elements[key].value = response[key];
    }
  }
});
});

updateStudentFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  let data = {};

  for (let key in this.elements) {
    if (!this.elements[key].hasAttribute || !this.elements[key].hasAttribute('name')) continue;

    data[this.elemnets[key].getAttribute('name')] = this.elements[key].value;
  }
});
