// Main js file

const name = 'James';

const person = {
  first: `${name}`,
};

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

sayHelloLinting(person.first);
