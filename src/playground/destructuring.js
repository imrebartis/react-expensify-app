const person = {
  // name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

// SETTING A DEFAULT FOR THE NAME PROPERTY (in case the property is missing):
const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

// RENAMING TEMP TO TEMPERATURE:
const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

// SETTING A DEFAULT FOR THE PUBLISHER PROPERTY (in case the property is missing):
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published
