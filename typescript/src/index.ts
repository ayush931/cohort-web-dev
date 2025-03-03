function greet1(name: string | number): string {
  return `Hello ${name}`;
}

console.log(greet1(1));

let x: any = "Hello";
x = 3;
console.log(x);

function sum1(a: number, b: number) {
  return a + b;
}

console.log(sum1(3, 4));

type k = number | string;

function sum(a: k, b: k): void {
  console.log((a as any) + (b as any));
}

sum(4, 5);
