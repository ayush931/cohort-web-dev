// type allows to do the union of the two or more different datatypes, but interference does not

type sumInput = number | string;

// join -> joining the two different interfaces ot team and the datatype in it

interface Manager {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  department: string;
}

type TeamLead = Manager & Employee; // this has the property of both the interfaces

let t: TeamLead = {
  name: "Ayush",
  age: 23,
  department: "IT",
};
