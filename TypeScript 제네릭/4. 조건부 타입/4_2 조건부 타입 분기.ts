type KeysOf<T> = T extends object ? keyof T : never;
type LengthOf<T> = T extends { length: infer L } ? L : never;
type NonNullable<T> = T extends null | undefined ? never : T;
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;

type G = KeysOf<{ a: number; b: string }>; 
type H = NonNullable<string | null | undefined>; 
type I = Extract<"a" | "b" | 1 | 2, string>; 
type J = Exclude<"a" | "b" | 1 | 2, number>; 

export {};