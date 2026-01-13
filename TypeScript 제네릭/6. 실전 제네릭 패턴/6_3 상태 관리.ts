function createStore<S extends object>(initialState: S) {
  let state = initialState;
  const listeners = new Set<(state: S) => void>();

  return {
    getState: () => state,
    setState: (partial: Partial<S>) => {
      state = { ...state, ...partial };
      listeners.forEach(l => l(state));
    },
    subscribe: (listener: (state: S) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    // selector에 제네릭 <R>을 추가하여 타입을 연결합니다.
    select: <R>(selector: (state: S) => R) => ({
      get: () => selector(state),
      subscribe: (l: (value: R) => void) => {
        const listener = (s: S) => l(selector(s));
        listeners.add(listener);
        return () => listeners.delete(listener);
      }
    })
  };
}

interface AppState {
  user: { name: string; loggedIn: boolean } | null;
  theme: "light" | "dark";
  notifications: string[];
}

const store = createStore<AppState>({
  user: null,
  theme: "light",
  notifications: []
});

// 이제 s는 AppState로, user는 유저 객체 타입으로 자동 추론됩니다.
const userSelector = store.select(s => s.user);
userSelector.subscribe(user => {
  console.log("User changed:", user);
});

store.setState({ user: { name: "Kim", loggedIn: true } });

export {};