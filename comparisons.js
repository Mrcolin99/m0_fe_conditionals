// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//This comes back as true beacuse the question is 9 greater than 4?
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This comes back as false because our variable tells us that books=3 and the question being asked
//is is 3 greater than 4.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//This returns as true because our variables tell us that there are 6 friends and 2 siblings
//and the question asked is are there more friends than sibilings?
var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
//This returns as true beacuase the number of attendees and meals is not the same.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
true

// Determine if the dog loves to play and loves the dog park
false

// Determine if the dog loves to play or loves the dog park
true

// Determine if the dog loves to play and is a puppy
Comes back as a referenceerror
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: it evaluated as a referenceerror because we have no variable that specfically says isPuppy.
