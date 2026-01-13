interface Cache<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V, ttl?: number): void;
  has(key: K): boolean;
  delete(key: K): boolean;
  clear(): void;
}

class TTLCache<K, V> implements Cache<K, V> {
  private cache = new Map<K, { value: V; expiresAt: number }>();
  constructor(private defaultTTL: number = 60000) {}

  set(key: K, value: V, ttl?: number) {
    const expiresAt = Date.now() + (ttl ?? this.defaultTTL);
    this.cache.set(key, { value, expiresAt });
  }

  get(key: K): V | undefined {
    const entry = this.cache.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }
    return entry.value;
  }

  has(key: K) { return this.get(key) !== undefined; }
  delete(key: K) { return this.cache.delete(key); }
  clear() { this.cache.clear(); }
}

const cache = new TTLCache<string, number>(1000);
cache.set("key1", 100);
console.log(cache.get("key1"));
setTimeout(() => console.log("1.5초 후:", cache.get("key1")), 1500);
export {}; 