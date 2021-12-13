const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, ...restOfAnimals] = animals;


// console.log(firstAnimal)
// console.log(restOfAnimals)




const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };



const { firstName, lastName, email, ...attributes } = person;

// console.log(attributes)




let person2 = person; //this would not make a copy, it would just reference the original 

//person2.firstName= "Damian" //this would impact the "person" variable b/c person2 is just referencing person


//to make a full copy of something, use spread

let {...theRealCopyOfPerson} = person

// const personCopy = { ...person };
// console.log(personCopy)

// console.log(personCopy==person);
// console.log(personCopy==person);

console.log(theRealCopyOfPerson==person);



// console.log(person2===person)
// console.log(theRealCopyOfPerson===person)


// console.log("******************************")
// console.log(person.firstName)

// theRealCopyOfPerson.firstName= "Damian"
// console.log(person.firstName)

// console.log(theRealCopyOfPerson.firstName)
// console.log(theRealCopyOfPerson)