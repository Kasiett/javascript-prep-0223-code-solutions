const person = {
  firstName: 'Captain',
  LastName: 'America',
  hobby: 'reading'
};
console.log(person);

const fullName = person.firstName + ' ' + person.LastName;
console.log("The person's name is: ", fullName);

person.job = 'Software Developer';
console.log("The person's current job is: ", person.job);
person['previousJob'] = 'Dentist';
console.log("The person's previous job is : ", person['previousJob']);
console.log('The complete object person: ', person);
