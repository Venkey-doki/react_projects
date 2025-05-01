# Advanced Routing Projects

Explore two distinct routing projects to master **React Router** and **TanStack Router**. Each project focuses on real-world use cases, from nested routes to data loading and dynamic navigation.

---

## 📍 Project A: Multi-Tier Blogging Platform (React Router)

### 📖 Project Overview
Build a **blogging platform** with public and private sections, user profiles, and admin dashboards. Use React Router v6 to implement nested routes, lazy-loaded pages, protected routes, and scroll restoration.

### 🚩 Core Requirements

1. **Nested Routes**  
   - Public routes: `/` (home), `/posts`, `/posts/:postId`, `/about`.  
   - Protected routes (requires login): `/dashboard`, `/dashboard/new-post`, `/dashboard/edit/:postId`.
   - User profile: `/users/:userId` with nested sub-routes: `/users/:userId/posts`, `/users/:userId/settings`.

2. **Route Guards & Redirects**  
   - Create a `<RequireAuth>` wrapper that redirects unauthenticated users to `/login`.  
   - After login, redirect back to originally requested route.

3. **Code Splitting & Lazy Loading**  
   - Use `React.lazy` + `Suspense` to lazy-load dashboard and profile pages.  
   - Show fallback spinners during load.

4. **Data Loading & Route Loaders**  
   - Fetch posts in `loader` functions tied to `/posts` and `/posts/:postId`.  
   - Display loading states handled by React Router’s `useNavigation` or custom hooks.

5. **Scroll Restoration**  
   - Implement scroll to top on route change.  
   - Preserve scroll position when navigating back.

6. **Custom Link Component**  
   - Build `<NavLinkPlus>` that highlights active routes and supports nested matching.  
   - Show dropdown of child links on hover for nested routes.

7. **404 & Catch-All**  
   - Create a `*` route to display a custom 404 page.  
   - Optionally, implement dynamic suggestions (search bar) on 404.

8. **Animations**  
   - Animate page transitions using `react-transition-group` or Framer Motion.  
   - Animate route changes for nested layouts.

---

### 🔨 Step-by-Step Roadmap

| Phase                      | Goals                                                                 |
|----------------------------|-----------------------------------------------------------------------|
| **1. Scaffold & Router Setup** | Install React Router v6. Set up basic `<BrowserRouter>` and `<Routes>`. Build Home, Posts, Login, Dashboard shells. |
| **2. Nested Routes**       | Define nested `<Route>` hierarchies for posts and dashboard.          |
| **3. Protected Routes**    | Implement `<RequireAuth>` HOC/component to guard dashboard routes.     |
| **4. Lazy Loading**        | Refactor dashboard and profile pages with `React.lazy` and `Suspense`.|
| **5. Data Loaders**        | Use `loader` props or `useEffect` hooks to fetch posts and user data. |
| **6. Scroll Restoration**  | Add logic to reset or restore scroll positions on navigation.         |
| **7. Custom NavLink**      | Create `<NavLinkPlus>` for active styles and nested dropdowns.         |
| **8. 404 & Animations**    | Add catch-all route and animate route transitions.                     |

---
