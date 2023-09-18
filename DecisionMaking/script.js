const stringFunction = string => string + "!";

const hello = () => console.log('Hello, World!');

const defParam = (a, b = 20) => a * b;

const newDefParam = (c, d = 40) => c * d;

const doubleAge = age => age * 2;

const newParam = (e, f = 10) => e * f;

const addName = (firstName, lastName) => console.log(firstName + " " + lastName);

let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday'
        break;
    case 2:
        dayName = 'Monday'
        break;
    case 3:
        dayName = 'Tuesday'
        break;
    case 4:
        dayName = 'Wednesday'
        break;
    case 5:
        dayName = 'Thursday'
        break;
    case 6:
        dayName = 'Friday'
        break;
    case 7:
        dayName = 'Saturday'
        break;
    default:
        dayName = 'Invalid day';
}

let grade = 7;
let school;

switch (grade) {
    case 1:
        school = 'Elementary School';
        break;
    case 2:
        school = 'Elementary School';
        break;
    case 3:
        school = 'Elementary School';
        break;
    case 4:
        school = 'Elementary School';
        break;
    case 5:
        school = 'Elementary School';
        break;
    case 6:
        school = 'Elementary School/Middle School';
        break;
    case 7:
        school = 'Junior High/Middle School';
        break;
    case 8:
        school = 'Junior High/Middle School';
        break;
    case 9:
        school = 'High School Freshman';
        break;
    case 10:
        school = 'High School Sophomore';
        break;
    case 11:
        school = 'High School Junior';
        break;
    case 12:
        school = 'High School Senior';
        break;
    case 13:
        school = 'College Freshman';
        break;
    case 14:
        school = 'College Sophomore';
        break;
    case 15:
        school = 'College Junior';
        break;
    case 16:
        school = 'College Senior';
        break;
    default:
        school = 'Invalid Entry';
}

let text;

switch (new Date().getDay()) {
    case 6:
        text = 'Today is Saturday';
        break;
    case 0:
        text = 'Today is Sunday';
        break;
    default:
        text = 'Darn, its a weekday. Looking forward to the weekend!';
}

let phoneNumberPresent = true;
let needsNumber;

switch(phoneNumberPresent) {
    case true:
        needsNumber = false;
        break;
    case false:
        needsNumber = true;
        break;
    default:
        needsNumber = 'Try Again!';
}

let selectedNumber = 23;
let output;

switch(selectedNumber) {
    case 23:
        output = "That's exactly what I was thinking, spooooky!";
        break;
    case 9:
        output = "How did you know?";
        break;
    default:
        output = "Better luck next time.";
}

let age = 17;

const isOldEnough = age >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';

let isOdd = false;

isOdd ? console.log(1) : console.log(2);

let pokemon = 130;

const title = pokemon < 145 ? 'New Trainer' : 'Master';

let childAge = 6;

const inKindergarten = childAge < 5 ? ' Too young' : 'Old Enough'; 

let viewerAge = 15;

const movieRating = viewerAge > 12 ? 'PG-13' : 'PG';

console.log(stringFunction("My name is Morgaan"));
hello();
console.log(defParam(10));
console.log(newDefParam(2, 60));
console.log(doubleAge(40));
console.log(newParam(16));
addName('Darren', 'Styles');
console.log(dayName);
console.log(school);
console.log(text);
console.log(needsNumber);
console.log(output);
console.log(isOldEnough);
console.log(isOdd);
console.log(title);
console.log(inKindergarten);
console.log(movieRating);