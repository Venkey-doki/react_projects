# API Interaction Projects

Two advanced projects to master **React Query** and **Axios** for robust data fetching, caching, and error handling in React applications.

---

## 📍 Project B: HTTP Client Library & Integration (Axios)

### 📖 Project Overview
Develop a **custom HTTP client library** using Axios that standardizes API calls (base URL, headers, error handling) and integrate it into a React app for user management (CRUD operations).

### 🚩 Core Requirements

1. **Axios Instance & Configuration**  
   - Create a reusable Axios instance with default base URL, timeouts, and interceptors for auth tokens.  
   - Manage request and response interceptors for logging and global error handling.

2. **Service Layer**  
   - Build a service module (`api/users.js`) exporting CRUD functions: `getUsers`, `getUserById`, `createUser`, `updateUser`, `deleteUser`.

3. **Centralized Error Handling**  
   - Standardize error response format.  
   - Map server errors to user-friendly messages.  
   - Retry failed requests with exponential backoff for network errors.

4. **Integrate with React**  
   - Create custom hooks (`useUsers`, `useUser`) that call service functions and manage loading/error states via `useState` or `useReducer`.

5. **Global Loading & Error Context**  
   - Use Context or Zustand to track global loading count and errors for displaying a top-level spinner or error banner.

6. **Concurrent Requests**  
   - Implement batch fetching (e.g., `Promise.all` for fetching user details simultaneously).  
   - Show aggregated progress indicator.

7. **Cancellation & Abort**  
   - Use Axios cancellation tokens to abort stale requests (e.g., search-as-you-type).  
   - Clean up on component unmount using `useEffect` cleanup.

8. **Retry Middleware**  
   - Write a custom Axios interceptor or middleware for retry logic on 5xx responses.  

9. **Testing**  
   - Mock Axios using `axios-mock-adapter` and write unit tests for service functions and hooks.

10. **Documentation**  
    - Generate API docs via JSDoc for service methods.  
    - Provide usage examples in a README.

---

### 🔨 Step-by-Step Roadmap

| Phase                            | Goals                                                                              |
|----------------------------------|------------------------------------------------------------------------------------|
| **1. Axios Setup**               | Install Axios. Create configured instance with interceptors.                        |
| **2. Service Layer**             | Develop `api/users.js` with CRUD functions.                                        |
| **3. Hooks Integration**         | Build `useUsers` and `useUser` hooks managing state and calling services.           |
| **4. Global Context**            | Add loading/error context for global indicators.                                    |
| **5. Concurrent Requests**       | Implement batch user detail fetching with progress UI.                              |
| **6. Cancellation**              | Add cancel tokens to search hook; abort on unmount.                                 |
| **7. Retry Logic**               | Write interceptor for retry on server errors.                                       |
| **8. UI Components**             | Build user list, detail, create/edit forms integrating hooks.                       |
| **9. Testing**                   | Unit-test services and hooks with `axios-mock-adapter` and React Testing Library.  |
| **10. Documentation**            | Document service API and hooks with JSDoc and examples.                             |

