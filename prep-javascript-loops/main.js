/* eslint-disable prefer-const */
function whileLoop1() {
  let newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log('Output 1: ', whileLoop1());

function whileLoop2() {
  let newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i * 2);
    console.log(0 + i + ': ' + (i * 2));
    i++;
  }
  console.log('length:' + newArray.length);
  return newArray;
}
console.log('Output 2: ', whileLoop2());

function forLoop1() {
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
    console.log(0 + i + ': ' + i);
  }
  console.log('length:' + newArray.length);
  return newArray;
}

console.log('Output 3 :', forLoop1());

function forLoop2() {
  let newArray = [];
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
  return newArray;
}
console.log('Output 4:', forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

function forInLoop1(object) {
  let newArray = [];
  let n = 0;
  for (let i in object) {
    newArray.push(i);

    console.log((n++) + ' :', i);
  }
  console.log('length: ', newArray.length);
  return newArray;
}

console.log('Output 5:', forInLoop1(object));

function forInLoop2(object) {
  let newArray = [];
  let n = 0;
  for (let i in object) {
    newArray.push(object[i]);

    console.log((n++) + ' :', object[i]);
  }
  console.log('length: ', newArray.length);
  return newArray;
}

console.log('Output 6:', forInLoop2(object));
