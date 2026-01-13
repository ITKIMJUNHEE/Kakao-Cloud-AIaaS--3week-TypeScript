// ---------------------------------------------------------
// 문제 1-2: 타입 에러 수정
// ---------------------------------------------------------

// 에러 1
const user: { name: string; age: number; email?: string } = {
  name: "Kim",
  age: 25
};
user.email = "kim@test.com";

// 에러 2
function double(value: number) {
  return value * 2;
}

// 에러 3
const numbers: (number | string)[] = [1, 2, 3];
numbers.push("four"); 

// 에러 4
function greet(name: string, age: number) {
  return `Hello, ${name}. You are ${age} years old.`;
}

// 에러 5
const config = {
  port: 3000,
  host: "localhost"
};
config.port = 3001;

// --- 콘솔 출력 추가 ---
console.log("--- 1-2 타입 에러 수정 결과 ---");
console.log("user:", user);
console.log("double(5):", double(5));
console.log("numbers:", numbers);
console.log("greet:", greet("Kim", 25));
console.log("config:", config);