interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  // if ((<Admin>person).role) { // 类型断言
  //   additionalInformation = (<Admin>person).role;
  // } else {
  //   additionalInformation = (<User>person).occupation;
  // }
  if ('role' in person) { // 类型收缩
    // person会被自动推导为Admin
    additionalInformation = person.role
  } else {
    // person会被自动推导为Admin
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);