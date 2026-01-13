function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}

function fromPairs<K extends string | number, V>(pairs: [K, V][]): Record<K, V> {
  const result = {} as Record<K, V>;
  pairs.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
}

const pair = makePair("name", 42);
console.log(swap(pair));
console.log(fromPairs([["a", 1], ["b", 2]]));

export {};