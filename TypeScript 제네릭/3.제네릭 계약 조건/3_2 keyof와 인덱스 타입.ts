function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res = {} as any;
  keys.forEach(k => res[k] = obj[k]);
  return res;
}
function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const res = { ...obj };
  keys.forEach(k => delete res[k]);
  return res as any;
}
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

const user = { id: 1, name: "Kim", email: "kim@test.com", age: 25 };
console.log(pick(user, ["id", "name"]));
console.log(omit(user, ["email"]));
console.log(updateProperty(user, "age", 26));

export {};