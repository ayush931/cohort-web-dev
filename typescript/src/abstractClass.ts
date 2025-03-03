// In abstract class we cannot implement the default function apart from the constructor 
// But in interface, declaring the default function is not possible

abstract class UserType {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract greet(): string
  hello () {
    console.log("Hello")
  }
}

class Employees extends UserType {
  name: string
  constructor(name: string) {
    super(name)
    this.name = name;
  }
  greet() {
    return `hi ${this.name}`
  }
}