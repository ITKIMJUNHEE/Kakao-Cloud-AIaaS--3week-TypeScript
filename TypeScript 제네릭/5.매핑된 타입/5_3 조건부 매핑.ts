type FunctionProps<T> = { [K in keyof T as T[K] extends Function ? K : never]: T[K] };
type NonFunctionProps<T> = { [K in keyof T as T[K] extends Function ? never : K]: T[K] };

export {};