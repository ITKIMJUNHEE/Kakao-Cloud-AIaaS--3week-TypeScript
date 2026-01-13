// ---------------------------------------------------------
// 문제 1-2: 타입 에러 수정
// 다음 코드의 타입 에러를 수정하세요.
// ---------------------------------------------------------

// 에러 1: 객체에 정의되지 않은 속성 추가 불가
const user: { name: string; age: number; email?: string } = {
  name: "Kim",
  age: 25
};
user.email = "kim@test.com";

// 에러 2: 매개변수 타입 미지정 (Implicit any)
function double(value: number) {
  return value * 2;
}

// 에러 3: 배열 타입 불일치 (number 배열에 string 추가 불가)
const numbers: (number | string)[] = [1, 2, 3];
numbers.push("four"); 
// 또는 numbers.push(4); 로 수정

// 에러 4: 함수 인자 개수 부족
function greet(name: string, age: number) {
  return `Hello, ${name}. You are ${age} years old.`;
}
greet("Kim", 25);

// 에러 5: 속성 값의 타입 변경 불가 (number 자리에 string 대입 불가)
const config = {
  port: 3000,
  host: "localhost"
};
config.port = 3001;