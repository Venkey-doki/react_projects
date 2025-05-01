# Advanced Routing Projects

Explore two distinct routing projects to master **React Router** and **TanStack Router**. Each project focuses on real-world use cases, from nested routes to data loading and dynamic navigation.

---

## 📍 Project B: E-Commerce Storefront (TanStack Router)

### 📖 Project Overview
Create an **online storefront** using TanStack Router to leverage its strong types, data loaders, and downstream caching. Features include product listings, cart management, checkout flow, and admin area.

### 🚩 Core Requirements

1. **Route Definitions & Type Safety**  
   - Define all routes with typed strong route parameters.  
   - Example paths: `/`, `/products`, `/products/:productId`, `/cart`, `/checkout`, `/admin`, `/admin/products`, `/admin/orders`.

2. **Data Fetching Strategies**  
   - Use TanStack Router’s `loader` API for fetching data before navigation.  
   - Implement `onLoadError` and retry logic per route.

3. **Route Params & Search Params**  
   - Pass filters (category, price range) via search params (`?category=electronics`).  
   - Read and reactively respond to changes in search params.

4. **Redirects & Status Codes**  
   - Redirect from deprecated URLs (e.g., `/item/:id` → `/products/:id`).  
   - Return appropriate HTTP-like status codes (e.g., 401 for unauthorized admin access).

5. **Link Preloading & Prefetching**  
   - Preload product details route on hover.  
   - Prefetch cart data when user views a product.

6. **Nested Layouts & Outlets**  
   - Implement a main layout with header/footer.  
   - Admin section with sidebar layout nested under `/admin`.

7. **Transition Hooks**  
   - Use `onTransition` to show global progress bar (e.g., NProgress).  
   - Cancel in-flight navigations and show confirmations for unsaved changes in forms.

8. **Custom Hooks Integration**  
   - Build `useCart()` hook using TanStack Router’s state integration.  
   - Sync cart state with localStorage or backend.

9. **Error Boundaries per Route**  
   - Assign error boundaries to product details, cart, and checkout routes.  
   - Show custom error UIs with retry actions.

10. **Testing & DevTools**  
    - Use TanStack Router Devtools to debug route state.  
    - Write tests for route loader behaviors and redirects.

---

### 🔨 Step-by-Step Roadmap

| Phase                        | Goals                                                                      |
|------------------------------|----------------------------------------------------------------------------|
| **1. Setup & Router Config** | Install `@tanstack/react-router`. Define routes with strong types.          |
| **2. Data Loaders**          | Implement `loader` functions for product list, product details, cart.       |
| **3. Search & Params**       | Parse and apply search params for filtering and sorting products.           |
| **4. Prefetch & Preload**    | Add prefetch on hover/per-route preloads using router features.             |
| **5. Nested Layouts**        | Build main and admin layouts with nested `<Outlet>`s.                      |
| **6. Transitions & Guards**  | Show progress bar on transition; guard admin routes with status codes.     |
| **7. Custom Hooks**          | Create `useCart` and integrate with route state and localStorage.           |
| **8. Error Boundaries**      | Assign per-route error boundaries with retry UIs.                          |
| **9. Testing & DevTools**    | Integrate Devtools; write loader and redirect tests.                       |

