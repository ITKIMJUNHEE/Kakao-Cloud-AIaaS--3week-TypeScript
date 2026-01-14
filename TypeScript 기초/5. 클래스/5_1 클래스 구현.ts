class Stack<T> {
  private items: T[] = [];
  push(item: T) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  get size() { return this.items.length; }
}

class Queue<T> {
  private items: T[] = [];
  enqueue(item: T) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
  get size() { return this.items.length; }
}

class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  append(item: T) {
    const node = new Node(item);
    if (!this.head) this.head = node;
    else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }
  }
  prepend(item: T) { this.head = new Node(item, this.head); }
  delete(item: T) {
    if (!this.head) return;
    if (this.head.value === item) { this.head = this.head.next; return; }
    let curr = this.head;
    while (curr.next) {
      if (curr.next.value === item) { curr.next = curr.next.next; return; }
      curr = curr.next;
    }
  }
  find(item: T) {
    let curr = this.head;
    while (curr) { if (curr.value === item) return curr; curr = curr.next; }
    return null;
  }
  toArray() {
    const res: T[] = [];
    let curr = this.head;
    while (curr) { res.push(curr.value); curr = curr.next; }
    return res;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop());  
console.log(stack.peek()); 
console.log(stack.size);   

const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.dequeue()); 
console.log(queue.front());   

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.toArray()); 
list.delete(1);
console.log(list.toArray()); 

export {};