type FunctionProps<T> = { [K in keyof T as T[K] extends Function ? K : never]: T[K] };
type NonFunctionProps<T> = { [K in keyof T as T[K] extends Function ? never : K]: T[K] };

type Mixed = { name: string; age: number; greet: () => void; calculate: (x: number) => number; };
type OnlyFunctions = FunctionProps<Mixed>;
type OnlyData = NonFunctionProps<Mixed>;

export {};