// 실습 1: 기본 타입
// 문제 1-1: 타입 추론

const a = "hello";          
let b = "hello";            
const c = [1, 2, 3];        
const d = [1, "two", true]; 
const e = { x: 1, y: 2 };   
const f = (x: number) => x * 2; 

function g() {
  return { id: 1, name: "Kim" };
}                           

const h = [1, 2, 3].map(x => x.toString()); 

// --- 콘솔 출력 추가 ---
console.log("--- 1-1 타입 추론 결과 ---");
console.log("a:", a);
console.log("b:", b);
// ... 생략 ...

export {}; // 👈 이 줄을 추가하면 빨간 줄이 사라집니다!