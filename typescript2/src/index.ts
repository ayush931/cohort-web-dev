interface User {
  id: string;
  name: string;
  age: number;
  password: string;
  email: string;
}



function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

// const age = sumOfAge({ name: "Ayush", age: 30 }, { name: "Aman", age: 23 });

// console.log(age);

