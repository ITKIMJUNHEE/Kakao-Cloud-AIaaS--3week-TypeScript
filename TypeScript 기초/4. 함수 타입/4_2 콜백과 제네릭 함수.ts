async function asyncMap<T, U>(
  items: T[],
  callback: (item: T, index: number) => Promise<U>
): Promise<U[]> {
  const result: U[] = [];
  for (let i = 0; i < items.length; i++) {
    result.push(await callback(items[i], i));
  }
  return result;
}

interface EventMap {
  click: { x: number; y: number };
  keydown: { key: string; code: string };
  submit: { data: Record<string, string> };
}

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]?.push(listener);
  }

  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    this.listeners[event] = this.listeners[event]?.filter(l => l !== listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners[event]?.forEach(l => l(data));
  }
}

const emitter = new TypedEventEmitter<EventMap>();

emitter.on("click", (event) => {
  console.log(event.x, event.y);  
});

emitter.emit("keydown", { key: "Enter", code: "Enter" });
emitter.emit("click", { x: 100, y: 200 });

export {};