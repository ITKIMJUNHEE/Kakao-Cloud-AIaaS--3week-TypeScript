interface Collection<T> {
  add(item: T): void;
  remove(item: T): boolean;
  contains(item: T): boolean;
  size(): number;
  toArray(): T[];
}

class UniqueCollection<T> implements Collection<T> {
  private items = new Set<T>();
  add(item: T) { this.items.add(item); }
  remove(item: T) { return this.items.delete(item); }
  contains(item: T) { return this.items.has(item); }
  size() { return this.items.size; }
  toArray() { return Array.from(this.items); }
}

const collection = new UniqueCollection<number>();
collection.add(1);
collection.add(2);
collection.add(1);
console.log(collection.toArray());