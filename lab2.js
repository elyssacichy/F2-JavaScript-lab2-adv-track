'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
}

var blob = new Blob();

var popDowington = 1000;
var count = 0;

while (popDowington > 0) {
  count++;
  popDowington = popDowington - count;
  // return count;
  var hoursSpentInDowington = count;
}

console.log(hoursSpentInDowington);

// TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  this.hours = 0;

  while (this.population > 0) {
    this.hours++;
    this.population = this.population - this.peoplePerHour;
    this.peoplePerHour++;
  }
  console.log(this.hours);
  return this.hours;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1500, 1) === 55,
  'hoursToOoze should match result for 1500');
assert(blob.hoursToOoze(2000, 1) === 63,
  'hoursToOoze should match result for 2000');
assert(blob.hoursToOoze(6, 1) === 3,
  'hoursToOoze should be 3.');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
  this.hi = hello[this.language];
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(this.hi);
  return sb.hi;

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {}
Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    if (a.slice(-1) > b.slice(-1)) {
      return 1;
    }
    else {
      return -1;
    }

    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  return stringArray.sort(byLastLetter);

}

//example:
console.log(lastLetterSort(['green', 'red', 'yellow', 'blue']));

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(num) {
    sum += num;
  });
  return sum;
}
//example:
console.log(sumArray([1, 2, 3, 4]));

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a, b) {
    if (sumArray(a) > sumArray(b)) {
      return 1;
    }
    else {
      return -1;
    }

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });

}
//example:
console.log(sumSort([[98, 99, 100], [23, 24, 25], [56, 57, 58]]));

assert(lastLetterSort(['never', 'sometime', 'today', 'tomorrow']).value === ['sometime', 'never', 'tomorrow', 'today'].value,
  'the string should be in alphabetical order, by the last letter of each string.');

assert(sumSort([[4, 5, 6], [7, 8, 9], [1, 2, 3]]).value === [[1, 2, 3], [4, 5, 6], [7, 8, 9]].value,
  'sumSort should put these arrays in oder based on the sum of their numbers.');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
