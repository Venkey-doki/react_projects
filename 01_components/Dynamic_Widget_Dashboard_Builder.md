# Dynamic Widget Dashboard Builder

## 🏗️ Project Overview

Build a **dashboard shell** where users can dynamically add, remove, drag-and-resize, and configure “widgets.” Each widget is its own functional component, with props, state, conditional UIs, and advanced composition patterns.

By the end, you’ll have:

- A fully componentized dashboard.
- A mini-library of headless (“logic only”) and presentational components.
- Global state via Context + Reducers.
- Custom hooks to orchestrate complex behaviors.
- Performance optimizations (memo, callbacks).
- Advanced patterns: compound components, render props, HOCs, portals, error boundaries.

---

## 🚩 Core Requirements

1. **Widget Shell**

   - A `<Dashboard>` container that holds any number of `<Widget />` children.
   - Basic layout using CSS Grid or Flexbox.

2. **Basic Components**

   - Build `<Widget header="…">…</Widget>` as a functional component in JSX.
   - Manage open/closed state internally (collapsed/expanded).
   - Use props vs. internal state to control visibility.

3. **Conditional Rendering**

   - Show a loading spinner when a widget is “fetching.”
   - Show an error message if data fails to load.
   - If no data, display a customizable “Empty State” via props.

4. **Composition Patterns**

   - **Compound Components**:
     ```jsx
     <Modal>
       <Modal.Trigger>Open</Modal.Trigger>
       <Modal.Content>…</Modal.Content>
       <Modal.Footer>…</Modal.Footer>
     </Modal>
     ```
   - **Render Props**:
     ```jsx
     <DataProvider url="…">
       {({ data, loading, error }) => /* render UI */}
     </DataProvider>
     ```
   - **Higher-Order Components**: e.g. a HOC that injects logging or theming.

5. **Global State with Context + Reducer**

   - Use React’s Context + `useReducer` to manage widget list, layout positions, user settings (e.g., theme).
   - Expose an API `useDashboard()` custom hook for child components to add/remove widgets.

6. **Custom Hooks**

   - `useWidgetData(url)`: handles fetch, caching, retry logic.
   - `useDragResize(ref)`: add drag/resize handlers to any widget container.

7. **Portals & Modals**

   - A settings modal (rendered with `createPortal`) to configure widget preferences.
   - Outside‐click and ESC-key handling.

8. **Error Boundaries**

   - Integrate an error boundary (e.g. via `react-error-boundary`) to catch render-time crashes per widget.

9. **Performance Tuning**

   - Memoize heavy‐compute props with `React.memo`, `useMemo`.
   - Stabilize callback props with `useCallback`.
   - Lazy-load rarely used widgets via `React.lazy` + `Suspense`.

10. **Testing (Bonus)**

    - Write unit tests for custom hooks and core components (e.g. Jest + React Testing Library).
    - Snapshot tests for static renders.

---

## 🔨 Step-by-Step Roadmap

| Phase                             | Goals                                                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Setup & Basics**             | Scaffold with Create-React-App (or Vite). Build `<Dashboard>` + `<Widget>` basic shell; pass `header` prop; toggle collapse via state. |
| **2. Conditional UIs**            | Add loading/error/empty states inside each widget. Expose via props.                                                                   |
| **3. Compound & Render-Props**    | Refactor Modal and DataProvider using compound & render-props patterns.                                                                |
| **4. Context & Reducer**          | Create `DashboardContext` + reducer to add/remove widgets; write `useDashboard()`.                                                     |
| **5. Custom Hooks**               | Implement `useWidgetData` and `useDragResize`; integrate into Widget.                                                                  |
| **6. Portals & Error Boundaries** | Wrap widgets in error boundary; build settings modal via portal.                                                                       |
| **7. Performance**                | Add `React.memo`, `useMemo`, `useCallback`; lazy-load heavy widgets.                                                                   |
| **8. Polish & Theme**             | Add theming support via Context; allow dark/light toggle.                                                                              |
| **9. (Bonus) Testing**            | Write tests for hooks and key components.                                                                                              |

---

## 🎯 Stretch Goals / Bonus Challenges

- **Persist Layout**: Save widget positions to `localStorage` or backend.
- **Drag-and-Drop Library**: Swap your own `useDragResize` for `react-beautiful-dnd`.
- **Accessibility**: Ensure all components are keyboard-navigable, ARIA-compliant.
- **Plugin System**: Allow third-party widget registration via plugin API.

