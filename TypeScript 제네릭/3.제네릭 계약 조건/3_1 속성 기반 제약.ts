function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

function extractIds<T extends { id: number }>(items: T[]): number[] {
  return items.map(i => i.id);
}

function filterByProperty<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
  return items.filter(i => i[key] === value);
}
// 테스트
console.log(getLength("hello"));        // 5
console.log(getLength([1, 2, 3]));      // 3

const users = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" }
];
console.log(extractIds(users));         // [1, 2]

console.log(filterByProperty(users, "name", "Kim"));
// [{ id: 1, name: "Kim" }]