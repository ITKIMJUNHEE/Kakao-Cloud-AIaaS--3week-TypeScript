type FirstParam<T> = T extends (arg: infer P, ...args: any[]) => any ? P : never;
type InstanceOf<T> = T extends new (...args: any[]) => infer R ? R : never;
type LastElement<T> = T extends [...any, infer L] ? L : never;
type ValueOf<T> = T[keyof T];

export {};
// 테스트
type K = FirstParam<(a: string, b: number) => void>; // string
type L = InstanceOf<typeof Date>; // Date
type M = LastElement<[1, 2, 3]>; // 3
type N = ValueOf<{ a: string; b: number }>; // string | number