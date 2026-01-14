function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

function concat<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2] as (T | U)[];
}

console.log(first([1, 2, 3]));           
console.log(last(["a", "b", "c"]));      
console.log(chunk([1, 2, 3, 4, 5], 2));  
console.log(concat([1, 2], ["a", "b"])); 

export {};