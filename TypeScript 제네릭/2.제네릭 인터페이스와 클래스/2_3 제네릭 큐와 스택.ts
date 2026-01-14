interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
}

class PriorityQueue<T> implements IQueue<T> {
  private items: T[] = [];
  private compareFn: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.compareFn = compareFn;
  }

  enqueue(item: T) { this.items.push(item); this.items.sort(this.compareFn); }
  dequeue() { return this.items.shift(); }
}

const pq = new PriorityQueue<{ task: string; priority: number }>(
  (a, b) => b.priority - a.priority
);
pq.enqueue({ task: "low", priority: 1 });
pq.enqueue({ task: "high", priority: 10 });
pq.enqueue({ task: "medium", priority: 5 });

console.log(pq.dequeue()); 
console.log(pq.dequeue()); 

export {};