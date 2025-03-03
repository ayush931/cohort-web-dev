// if i add or remove any field from the Address, the address field in User and Office interface will automatically updated

interface Address {
  country: string;
  city: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address?: Address;
  // adding the ? made the field optional
}

interface Office {
  address: Address;
}

let user1: User = {
  name: "Ayush",
  age: 23,
  address: {
    country: "India",
    city: "Patna",
    pincode: 800020,
  },
};

// Address is optional as this is an optional field

let user2: User = {
  name: "Ankit",
  age: 24,
};

function isLegal(user1: User): boolean {
  if (user1.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const ans = isLegal(user1);

if (ans) {
  console.log("I am legal to vote");
} else {
  console.log("I am not eligible to vote");
}
