# State Management Mastery

Explore two comprehensive projects to conquer **React Context API** and **Zustand** for state management in complex applications.

---

## 📍 Project B: E-Commerce Cart & Inventory (Zustand)

### 📖 Project Overview

Create a **full-featured store** with product catalog, shopping cart, and admin inventory dashboard. Use Zustand for lightweight, modular state management with minimal boilerplate and enhanced performance.

### 🚩 Core Requirements

1. **Store Setup**

   - Initialize a Zustand store with slices for `products` (list, details) and `cart` (items, quantities).
   - Utilize selectors and middleware for logging or persisting state.

2. **Product Catalog**

   - Fetch product data from API and store in `products` slice.
   - Use selectors (`useStore(state => state.products.list)`) to derive data in components.

3. **Cart Management**

   - Manage cart actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`.
   - Compute derived values (subtotal, total items) with selectors.

4. **Persistence Middleware**

   - Persist cart state to `localStorage` using Zustand’s `persist` middleware.
   - Rehydrate state on app load.

5. **Modular Slices**

   - Split store into discrete slices (e.g., catalogSlice, cartSlice) and combine.
   - Demonstrate cross-slice interactions (e.g., decrement stock on add to cart).

6. **Subscriptions & Listeners**

   - Use `subscribe` to listen for changes (e.g., cart empty → show promo).
   - Clean up subscriptions on component unmount.

7. **Middleware & DevTools**

   - Integrate Zustand Devtools for state inspection.
   - Add logging middleware to trace actions and state changes in console.

8. **Optimistic UI**

   - Optimistically update UI on add/remove, then confirm with backend.
   - Roll back on failure.

9. **TypeScript Integration**

   - Define clear TypeScript interfaces/types for state slices.
   - Ensure strong typing for selectors and actions.

10. **Testing**

    - Unit-test store slices and actions with mocked state.
    - Integration tests for UI flows using the Zustand store.

---

### 🔨 Step-by-Step Roadmap

| Phase                         | Goals                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **1. Init & Store Setup**     | Install Zustand. Create base store with products and cart slices.                    |
| **2. Product Fetch & Select** | Fetch products into store. Use selectors in catalog components.                      |
| **3. Cart Actions**           | Implement cart slice actions and selectors, build add/remove UI.                     |
| **4. Persistence**            | Add `persist` middleware for cart. Verify rehydration on reload.                     |
| **5. Modular Slices**         | Refactor into discrete slice files, show cross-slice updates (stock decrement).      |
| **6. Subscriptions**          | Subscribe to cart state changes to trigger side-effects.                             |
| **7. DevTools & Middleware**  | Integrate DevTools and logging middleware.                                           |
| **8. Optimistic Updates**     | Implement optimistic UI for cart operations with rollback logic.                     |
| **9. TypeScript**             | Add TS types/interfaces, update store definitions and selectors.                     |
| **10. Testing**               | Write unit tests for slices and integration tests for adding/removing items from UI. |

