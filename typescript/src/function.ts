function canVote(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(32));

function delayedCall(fn: () => void) {
  // fn: () => void defines the datatype of the parameter
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("Hello");
});

function delayedGreet(anotherFn: (a: string) => void) {
  setTimeout(anotherFn, 1000);
}

function greeting(name: string) {
  console.log(`Hello ${name}`);
}

delayedGreet(greeting);
