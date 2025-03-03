function greets(user: { name: string; age: number }) {
  console.log(`Hello ${user.name}`);
}

let user = {
  name: "Ayush",
  age: 21,
};

greets(user);

interface userType {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(users: userType) {}

let users: userType = {
  firstName: "Ayush",
  lastName: "Kumar",
  age: 23,
};
