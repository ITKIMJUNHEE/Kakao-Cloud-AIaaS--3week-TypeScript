interface Lengthwise { length: number; }
function getLength<T extends Lengthwise>(item: T): number { return item.length; }
function extractIds<T extends { id: number }>(items: T[]): number[] { return items.map(i => i.id); }
function filterByProperty<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
  return items.filter(i => i[key] === value);
}

console.log(getLength("hello"));        
console.log(getLength([1, 2, 3]));      
const users = [{ id: 1, name: "Kim" }, { id: 2, name: "Lee" }];
console.log(extractIds(users));         
console.log(filterByProperty(users, "name", "Kim"));

export {};