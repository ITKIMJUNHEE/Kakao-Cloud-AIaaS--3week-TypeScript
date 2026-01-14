interface Store<S> {
  getState(): S;
  setState(partial: Partial<S>): void;
  subscribe(listener: (state: S) => void): () => void;
  select<R>(selector: (state: S) => R): { get(): R; subscribe(listener: (value: R) => void): () => void; };
}

function createStore<S extends object>(initialState: S): Store<S> {
  let state = initialState;
  const listeners = new Set<(state: S) => void>();
  return {
    getState: () => state,
    setState: (p) => { state = { ...state, ...p }; listeners.forEach(l => l(state)); },
    subscribe: (l) => { listeners.add(l); return () => listeners.delete(l); },
    select: (sel) => ({
      get: () => sel(state),
      subscribe: (l) => {
        const listener = (s: S) => l(sel(s));
        listeners.add(listener);
        return () => listeners.delete(listener);
      }
    })
  };
}

interface AppState { user: { name: string; loggedIn: boolean } | null; theme: "light" | "dark"; notifications: string[]; }
const store = createStore<AppState>({ user: null, theme: "light", notifications: [] });
const userSelector = store.select(s => s.user);
userSelector.subscribe(user => console.log("User changed:", user));
store.setState({ user: { name: "Kim", loggedIn: true } });

export {};