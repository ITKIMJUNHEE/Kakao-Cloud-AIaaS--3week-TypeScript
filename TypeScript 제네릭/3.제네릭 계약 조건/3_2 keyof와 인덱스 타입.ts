function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(k => result[k] = obj[k]);
  return result;
}

function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(k => delete result[k]);
  return result as Omit<T, K>;
}

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}
export {};
// 테스트
const user = { id: 1, name: "Kim", email: "kim@test.com", age: 25 };

const picked = pick(user, ["id", "name"]);
// { id: 1, name: "Kim" }

const omitted = omit(user, ["email"]);
// { id: 1, name: "Kim", age: 25 }

const updated = updateProperty(user, "age", 26);
// { id: 1, name: "Kim", email: "kim@test.com", age: 26 }