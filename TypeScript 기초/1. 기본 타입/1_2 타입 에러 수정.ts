const user: { name: string; age: number; email?: string } = {
  name: "Kim",
  age: 25
};
user.email = "kim@test.com";

function double(value: number): number {
  return value * 2;
}

const numbers: (number | string)[] = [1, 2, 3];
numbers.push("four");

function greet(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}
console.log(greet("Kim", 25));

const config: { port: number | string; host: string } = {
  port: 3000,
  host: "localhost"
};
config.port = "3001";

console.log(user, double(5), numbers, config);

export {};