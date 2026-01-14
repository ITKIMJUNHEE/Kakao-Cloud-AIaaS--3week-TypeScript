function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}

function fromPairs<K extends string | number, V>(pairs: [K, V][]): Record<K, V> {
  const res = {} as Record<K, V>;
  pairs.forEach(([k, v]) => res[k] = v);
  return res;
}

const pair = makePair("name", 42);       
const swapped = swap(pair);               
const obj = fromPairs([["a", 1], ["b", 2]]); 

console.log(pair, swapped, obj);

export {};