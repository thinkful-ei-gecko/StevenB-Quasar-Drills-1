'use strict';
//Object Creator
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxenfree',
    sayHello() {
      return 'hello';
    }
  };
}

/*const dog = createMyObject();
console.log(dog);
console.log(dog.sayHello());
*/

//Object Updater
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
}

//Self-reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

//Deleting Keys
const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

const newObj = keyDeleter(sampleObj);
console.log(newObj);
