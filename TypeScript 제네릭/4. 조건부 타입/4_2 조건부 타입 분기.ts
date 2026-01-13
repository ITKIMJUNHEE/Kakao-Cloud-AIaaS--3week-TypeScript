type KeysOf<T> = keyof T;
type LengthOf<T> = T extends { length: infer L } ? L : never;
type NonNullable<T> = T extends null | undefined ? never : T;
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;
export {};
// 테스트
type G = KeysOf<{ a: number; b: string }>; // "a" | "b"
type H = NonNullable<string | null | undefined>; // string
type I = Extract<"a" | "b" | 1 | 2, string>; // "a" | "b"
type J = Exclude<"a" | "b" | 1 | 2, number>; // "a" | "b"