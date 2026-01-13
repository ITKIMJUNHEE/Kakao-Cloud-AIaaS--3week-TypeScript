async function asyncMap<T, U>(
  items: T[],
  callback: (item: T, index: number) => Promise<U>
): Promise<U[]> {
  return Promise.all(items.map((item, index) => callback(item, index)));
}

interface EventMap {
  click: { x: number; y: number };
  keydown: { key: string; code: string };
  submit: { data: Record<string, string> };
}

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]?.push(listener);
  }

  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    const listeners = this.listeners[event];
    if (listeners) {
      this.listeners[event] = listeners.filter(l => l !== listener);
    }
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners[event]?.forEach(listener => listener(data));
  }
}

const emitter = new TypedEventEmitter<EventMap>();

emitter.on("click", (event) => {
  console.log(`클릭 좌표: x=${event.x}, y=${event.y}`);
});

emitter.emit("keydown", { key: "Enter", code: "Enter" });
emitter.emit("click", { x: 100, y: 200 });

async function testAsync() {
  const numbers = [1, 2, 3];
  const doubled = await asyncMap(numbers, async (n) => n * 2);
  console.log("asyncMap 결과:", doubled);
}

testAsync();

export {};