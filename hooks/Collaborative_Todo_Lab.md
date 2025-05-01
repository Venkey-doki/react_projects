# Collaborative Todo Lab

## 🏗️ Project Overview
Build a **real-time, extensible Todo application** where multiple users can connect (via WebSockets or simulated API), create/edit/delete tasks, filter/sort, and see live updates. The goal is to master all core React hooks plus custom hooks for encapsulating logic and side-effects.

## 🚩 Core Requirements

1. **Basic State Management**  
   - Use `useState` to manage individual todo inputs (text, checkbox).  
   - Use `useReducer` (advanced state hook) for the global todo list with actions: `ADD_TODO`, `TOGGLE_TODO`, `DELETE_TODO`, `EDIT_TODO`, `SET_FILTER`.

2. **Side-Effects & Data Sync**  
   - Use `useEffect` to fetch initial todo list from a mock API on mount.  
   - Use `useEffect` to persist changes to `localStorage` on each state update.  
   - Use `useEffect` with cleanup to manage WebSocket (or `setInterval`-simulated) real-time updates: subscribe on mount, unsubscribe on unmount.

3. **Memoization & Callbacks**  
   - Use `useMemo` to compute filtered/sorted lists efficiently (e.g., active vs. completed).  
   - Use `useCallback` to memoize event handlers passed to deeply nested components, preventing unnecessary re-renders.

4. **Custom Hooks**  
   - `useTodos()`: encapsulates reducer logic plus localStorage sync. Returns `[todos, dispatch, filter, setFilter]`.  
   - `useWebSocket(url, onMessage)`: handles connecting, message parsing, reconnection logic.  
   - `useFormInput(initialValue)`: manages form state + validation for task editing/creation.

5. **Context & Hook Composition**  
   - Provide a `TodosContext` (via `createContext`) to expose todo state and actions across the tree.  
   - Build `useTodosContext()` that calls `useContext(TodosContext)` and throws if used outside provider.

6. **Error-Handling & Loading States**  
   - Use `useState`/`useReducer` flags for loading and error states during fetch/save.  
   - Display a spinner or error banner accordingly.

7. **Performance Optimization**  
   - Lazy-load heavy components (e.g., analytics dashboard) with `React.lazy` + `Suspense`.  
   - Wrap pure list items in `React.memo`.

8. **Advanced Patterns (Bonus)**  
   - **Render-Props** for a `<RealtimeConsumer>` that passes live data to children.  
   - **Compound Components** for a `<TodoList>` grouping:
     ```jsx
     <TodoList>
       <TodoItem>…</TodoItem>
     </TodoList>
     ```

9. **Testing (Bonus)**  
   - Unit-test `useTodos` and `useWebSocket` with mocked timers and sockets.  
   - Integration tests for the full todo flow with React Testing Library.

## 🔨 Step-by-Step Roadmap

| Phase                      | Goals                                                                 |
|----------------------------|-----------------------------------------------------------------------|
| **1. Scaffold & Reducer**  | Set up Vite/CRA. Build `useReducer` for todos and dispatch basic actions. |
| **2. Fetch & Persist**     | Add `useEffect` to load initial data & `localStorage` sync.          |
| **3. Filtering & Memoization** | Implement filtering UI; optimize with `useMemo` + `useCallback`.     |
| **4. Custom Hooks**        | Extract `useTodos`, `useFormInput`.                                  |
| **5. Real-Time Updates**   | Create `useWebSocket`; integrate live sync of added/edited todos.    |
| **6. Context API**         | Wrap in `TodosContext`; replace prop-drilling with `useContext`.      |
| **7. Perf & Lazy**         | Lazy-load analytics dashboard; memoize `TodoItem`.                   |
| **8. Bonus Patterns**      | Add render-props for live updates; implement compound `<TodoList>`.  |
| **9. (Bonus) Tests**       | Write unit tests for hooks and integration tests for task flows.      |

## 🎯 Stretch Goals / Bonus Challenges

- **Optimistic UI**: Update UI before network confirmation, roll back on failure.  
- **Undo/Redo**: Implement history stack via custom hook (`useHistoryState`).  
- **Drag-and-Drop**: Reorder tasks with `react-beautiful-dnd` or your own `useDragOrder` hook.  
- **Analytics Panel**: Show live charts of completed vs pending tasks (using `react-chartjs-2`).

