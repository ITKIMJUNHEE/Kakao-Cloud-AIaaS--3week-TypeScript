type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

function stringify(value: JsonValue): string {
  return JSON.stringify(value);
}

function getType(value: JsonValue): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function deepClone(value: JsonValue): JsonValue {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone);
  const result: { [key: string]: JsonValue } = {};
  for (const key in value) result[key] = deepClone(value[key]);
  return result;
}

console.log(stringify("hello"));       
console.log(stringify(42));            
console.log(stringify([1, 2, 3]));     
console.log(stringify({ a: 1 }));      

console.log(getType("hello"));         
console.log(getType([1, 2]));          
console.log(getType({ a: 1 }));        
console.log(getType(null));            

export {};