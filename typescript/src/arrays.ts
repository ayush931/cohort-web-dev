// returning the max positive element an Array

function getMax(nums: number[]) {
  let maxInt = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxInt) {
      maxInt = nums[i];
    }
  }
  return maxInt;
}

const maxArray = getMax([1, 2, 3, 4, 5]);
console.log(maxArray);

interface Addresses {
  city: string;
  pincode: number;
}

interface Person {
  name: string;
  age: number;
  addresses: Addresses[];
}

let person1: Person = {
  name: "Ayush",
  age: 23,
  addresses: [],
};

interface AgeFind {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUser(users: AgeFind[]) {
  let ans = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      ans.push(users[i]);
    }
  }
  return ans;
}

const filterUsers = filterUser([{
  firstName: "Ayush",
  lastName: "Kumar",
  age: 23
}])

console.log(filterUsers)
