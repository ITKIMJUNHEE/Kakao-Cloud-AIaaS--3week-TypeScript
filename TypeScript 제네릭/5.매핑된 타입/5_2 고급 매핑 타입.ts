type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
type Prefixed<T, P extends string> = { [K in keyof T as `${P}${string & K}`]: T[K] };
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };
type Setters<T> = { [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void };

type User = { name: string; age: number };
const nOnly: MyPick<User, "name"> = { name: "Kim" };
const wAge: MyOmit<User, "age"> = { name: "Lee" };

console.log(nOnly, wAge);

export {};