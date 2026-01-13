// 실습 1: 기본 타입
// 문제 1-1: 타입 추론

const a = "hello";          // 타입: "hello"
let b = "hello";            // 타입: string
const c = [1, 2, 3];        // 타입: number[]
const d = [1, "two", true]; // 타입: (string | number | boolean)[]
const e = { x: 1, y: 2 };   // 타입: { x: number; y: number; }
const f = (x: number) => x * 2; // 타입: (x: number) => number

function g() {
  return { id: 1, name: "Kim" };
}                           // 반환 타입: { id: number; name: string; }

const h = [1, 2, 3].map(x => x.toString()); // 타입: string[]