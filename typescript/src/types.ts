// In types you do not implement it in class like interface do
// In type it lets you to do union and intersection

// Intersection

type Employees1 = {
  name: string,
  startDate: string
}

type Managers = {
  name: string,
  department: string
}

type TeamLead1 = Employees1 & Managers // & operator gives the properties of both the types

let employees1: Employees1 = {
  name: "Ayush",
  startDate: "09-07-2002"
}

let manager1: Managers = {
  name: "Ankit",
  department: "IT"
}

let teamLead1: TeamLead1 = {
  name: "Aman",
  startDate: "09-08-2003",
  department: "HR"
}

// Union

type GoodUser = {
  name: string,
  gift: string
}

type BadUser = {
  name: string,
  ip: string
}

type UserFind = GoodUser | BadUser   

const findUser: UserFind = {
  name: "Ayush",
  gift: "Lappy",
  ip: "192.0.0.1"
}

// Another example

interface Admin {
  name: string,
  permission: string
}

interface Users {
  name: string,
  age: number
}

type UserOrAdmin = Admin | Users

function greet3 (user: UserOrAdmin) {
  console.log(user.name) // can use user.name because it is present in both the interface
  // console.log(user.age) -> cannot use the user.age as it is not present in both the interface
}