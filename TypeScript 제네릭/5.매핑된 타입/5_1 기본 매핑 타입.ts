type MyPartial<T> = { [P in keyof T]?: T[P] };
type MyRequired<T> = { [P in keyof T]-?: T[P] };
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
type MyRecord<K extends keyof any, V> = { [P in K]: V };

type User = { name: string; age: number };
const pUser: MyPartial<User> = { name: "Kim" };
const rUser: MyReadonly<User> = { name: "Lee", age: 30 };
const sRec: MyRecord<"a" | "b", string> = { a: "hi", b: "hello" };

console.log(pUser, rUser, sRec);

export {};