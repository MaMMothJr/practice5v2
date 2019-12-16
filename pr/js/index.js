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
import {studentListElement} from './variables.js';
import {appendStudent} from './tools.js';


let database = new DB ('https://frontend-lectures.firebaseio.com');

console.log('database', database);
let studentList = [];
database.getStudent().then(result => {
  studentList = Object.values(result);

  studentList.forEach(student => appendStudent(student, studentListElement));
});
