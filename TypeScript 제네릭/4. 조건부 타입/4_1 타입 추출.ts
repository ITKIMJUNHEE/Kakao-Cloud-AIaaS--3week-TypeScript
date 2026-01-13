type Flatten<T> = T extends (infer U)[] ? U : T;
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type ParametersOf<T> = T extends (...args: infer P) => any ? P : never;
// 테스트
type A = Flatten<number[]>;          // number
type B = Flatten<string>;            // string
type C = MyAwaited<Promise<number>>;   // number
type D = MyAwaited<Promise<Promise<string>>>; // string
type E = ReturnTypeOf<() => boolean>; // boolean
type F = ParametersOf<(a: string, b: number) => void>; // [string, number]