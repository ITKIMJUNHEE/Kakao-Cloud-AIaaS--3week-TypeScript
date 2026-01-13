/**
 * 실습 3: 유니온 타입과 타입 가드
 * 문제 3-1: 유니온 타입 처리
 */

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

// 1. stringify: JsonValue를 문자열로 변환
function stringify(value: JsonValue): string {
  return JSON.stringify(value);
}

// 2. getType: JsonValue의 타입을 문자열로 반환
function getType(value: JsonValue): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

// 3. deepClone: JsonValue를 깊은 복사
function deepClone(value: JsonValue): JsonValue {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObj: { [key: string]: JsonValue } = {};
  for (const key in value) {
    clonedObj[key] = deepClone(value[key]);
  }
  return clonedObj;
}


// 테스트


console.log(stringify("hello"));       // "hello"
console.log(stringify(42));            // "42"
console.log(stringify([1, 2, 3]));     // "[1,2,3]"
console.log(stringify({ a: 1 }));      // '{"a":1}'

console.log(getType("hello"));          // "string"
console.log(getType([1, 2]));           // "array"
console.log(getType({ a: 1 }));         // "object"
console.log(getType(null));             // "null"

// 파일 간 변수 이름 충돌 방지
export {};