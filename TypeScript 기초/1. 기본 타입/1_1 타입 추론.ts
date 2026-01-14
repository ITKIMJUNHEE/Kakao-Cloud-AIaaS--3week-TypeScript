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

console.log(typeof a, typeof b, Array.isArray(c), typeof d, typeof e, typeof f, typeof g(), typeof h);

export {};