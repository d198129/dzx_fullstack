// interface 和type 都是用来声明自定义类型的
export type User = { // 数据类型
  name: string,
  age: number,
  occupation: string
};

export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);