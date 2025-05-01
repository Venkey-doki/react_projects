# Dynamic Photo Gallery Explorer

## 🏗️ Project Overview
Create an **interactive photo gallery** that fetches images from a public API, displays them in a responsive grid, and offers rich interactions—covering component lifecycle, lists/keys, render props, refs, event handling, and higher-order components.

By completing this, you’ll master:
- Data fetching on mount/unmount (lifecycle).
- Rendering dynamic lists with proper keys.
- Advanced patterns: render props and HOCs.
- Direct DOM access with refs.
- Handling user events (click, scroll, keyboard).

---

## 🚩 Core Requirements

1. **Component Lifecycle**  
   - Fetch photos on mount (`componentDidMount` in a class or `useEffect` in a functional component).  
   - Cleanup or cancel in-flight fetch on unmount (`componentWillUnmount` / cleanup function).  
   - Show a loading spinner until data arrives.

2. **Lists & Keys**  
   - Render a grid of `<PhotoCard>` components from the fetched array.  
   - Assign unique `key` props (e.g., photo ID) to each item.  
   - Implement “Load More” to append new pages, preserving keys.

3. **Render Props**  
   - Build a `<LightboxProvider>` component that accepts children as a function:  
     ```jsx
     <LightboxProvider photos={photos}>
       {({ open, close }) => (
         /* custom layout that calls open(photoIndex) */
       )}
     </LightboxProvider>
     ```  
   - Use it to open a modal overlay showing the selected image.

4. **Refs**  
   - Use `createRef` or `useRef` to:  
     - Focus the search input on initial render.  
     - Programmatically scroll the gallery container to top when filters change.

5. **Event Handling**  
   - Handle click events on `<PhotoCard>` to open the lightbox.  
   - Listen for keyboard events (arrow keys) within the lightbox to navigate photos.  
   - Debounce scroll events to trigger “infinite scroll” loading.

6. **Higher-Order Components (HOCs)**  
   - Create a `withLoadingIndicator(WrappedComponent)` HOC that shows a spinner during data fetch.  
   - Create a `withLogging(WrappedComponent, options)` HOC that logs prop changes and lifecycle events.

7. **Error Handling**  
   - Show an error message if the fetch fails, with a “Retry” button.  
   - Use an Error Boundary component to catch render-time errors in any photo card.

8. **Performance Optimizations**  
   - Wrap `<PhotoCard>` in `React.memo` to avoid re-renders when unrelated state changes.  
   - Use `useCallback` for event handlers passed to memoized children.

---

## 🔨 Step-by-Step Roadmap

| Phase                          | Goals                                                                                  |
|--------------------------------|----------------------------------------------------------------------------------------|
| **1. Scaffold & API Fetch**    | Set up CRA/Vite. Create `<Gallery>` class/component. Fetch photos in lifecycle, show spinner. |
| **2. Render List & Keys**      | Map over photos to `<PhotoCard>` grid. Assign unique keys. Implement “Load More.”         |
| **3. Refs & Events**           | Focus search input; scroll container; handle photo clicks; keyboard nav in lightbox.    |
| **4. Render Props**            | Build `<LightboxProvider>` with render-props API; integrate custom layout.             |
| **5. HOCs**                    | Implement `withLoadingIndicator` and `withLogging`; wrap `<Gallery>` and `<PhotoCard>`. |
| **6. Error Handling**          | Add retry UI on fetch error; wrap children with Error Boundary.                         |
| **7. Performance**             | Apply `React.memo`, `useCallback`; optimize infinite scroll debounce.                   |
| **8. Styling & Responsiveness**| Add CSS grid/flexbox for layout; mobile breakpoints; theme toggle via HOC or context.   |

---

## 🎯 Stretch Goals / Bonus Challenges

- **Virtualized Lists**: Integrate `react-window` for large datasets.  
- **Accessibility**: ARIA roles for modal, keyboard focus trap.  
- **Drag-to-Reorder**: Allow drag-and-drop rearrangement with `react-beautiful-dnd`.  
- **Analytics HOC**: Track user interactions (views, clicks) and send to analytics service.

