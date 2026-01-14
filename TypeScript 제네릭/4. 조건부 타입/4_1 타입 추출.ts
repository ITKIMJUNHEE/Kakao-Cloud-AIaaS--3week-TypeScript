type Flatten<T> = T extends (infer U)[] ? U : T;
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type ParametersOf<T> = T extends (...args: infer P) => any ? P : never;

type A = Flatten<number[]>;          
type B = Flatten<string>;            
type C = MyAwaited<Promise<number>>;   
type D = MyAwaited<Promise<Promise<string>>>; 
type E = ReturnTypeOf<() => boolean>; 
type F = ParametersOf<(a: string, b: number) => void>; 

export {};