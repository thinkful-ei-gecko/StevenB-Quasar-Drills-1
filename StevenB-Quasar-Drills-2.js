'use strict';

// make student reports

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentReport(data) {
  // create empty array 'output'
  let output = [];

  data.forEach( (element, index) => {
    output[index] = `${element.name}: ${element.grade}`;
  });

  return output;
}

let grades = makeStudentReport(testData);
console.log(grades);

// enroll in summer school

// @param {students}  - an array of objects
// returns an array of objects
function enrollInSummerSchool(students) {
  students.forEach( (element) => {
    element.status = 'In Summer School';
  });

  return students;
}

const students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

let newStudents = enrollInSummerSchool(students);
console.log(newStudents);

// find by id

// items is an array of objects
// idNum is the id we're trying to find in items
// return found item
function findById(items, idNum) {
  return items.find( (element) => element.id === idNum );
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
console.log(findById(data, 2)); // should return {id: 2, foo: 'bizz'}

// validate object keys