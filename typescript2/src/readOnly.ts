const a = [1, 2, 3, 4, 5];
a[0] = 4  // let the value be change the internal value even after using constant.

type Users1 = {
  readonly name: string,
  readonly age: number
}

// by adding the readonly it does not let you to change the internal values also.

const user: Users1 = {
  name: "Ayush",
  age: 32
}

// user.age = 22

// or

interface User1 {
  name: string,
  age: number
}

// Readonly does not let you to change the internal values of the given object

const user1: Readonly<User1> = {
  name: "Ankit",
  age: 22
}

// user1.age = 23
