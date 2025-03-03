interface People {
  name: string;
  age: number;
}

let person: People = {
  name: "Ayush",
  age: 23,
};

let greetings = person.age
console.log(greetings)

// class Manager implements People {
//   name: string;
//   age: number;
//   nums1: number

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.nums1 = 23;
//   }
// }

// Another way of writing the class without repeating the logic twice

class Manager implements People {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }
}

let users1 = new Manager("Ayush", 34);
console.log(users1.age);

interface Point2D {
  x: number,
  y: number
}

// we have to give the property available in interface, but also can give some extra point

const intermediatryPoint = {
  x: 1,
  y: 1,
  name: "Ayush",
  age: 29
}

const p3: Point2D = intermediatryPoint