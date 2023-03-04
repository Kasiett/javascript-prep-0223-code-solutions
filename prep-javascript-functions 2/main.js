function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers output=> ', addTwoNumbersResult);

function convertHoursToMinutes(hour) {
  return hour * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutesResult output => ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
var getGreetingResult = getGreeting('Hulk!');
console.log('getGreeting output => ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 output => ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 output => ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers output => ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference output => ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Joe', 'Biden');
console.log('getFullName output => ', getFullNameResult);

function cube(number) {
  return (number * number) * number;
}
var cubeResult = cube(5);
console.log('output of cube => ', cubeResult);
