type EventMap = {
  userLogin: { userId: string; timestamp: Date };
  userLogout: { userId: string };
  pageView: { path: string; referrer?: string };
  error: { message: string; code: number };
};

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: Function[] } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void) {
    (this.listeners[event] ||= []).push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]) {
    this.listeners[event]?.forEach(l => l(data));
  }
}

const emitter = new TypedEventEmitter<EventMap>();

emitter.on("userLogin", (data) => {
  console.log(data.userId); 
});

emitter.emit("userLogin", {
  userId: "123",
  timestamp: new Date()
});