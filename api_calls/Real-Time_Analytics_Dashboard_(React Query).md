# API Interaction Projects

Two advanced projects to master **React Query** and **Axios** for robust data fetching, caching, and error handling in React applications.

---

## 📍 Project A: Real-Time Analytics Dashboard (React Query)

### 📖 Project Overview
Build a **real-time analytics dashboard** that displays metrics (e.g., user activity, sales data) by fetching from multiple endpoints. Leverage React Query for caching, background updates, pagination, and optimistic updates.

### 🚩 Core Requirements

1. **Setup React Query**  
   - Install `@tanstack/react-query` and configure `QueryClient` and `QueryClientProvider` at root.

2. **Multiple Query Hooks**  
   - Create `useUserStats()`, `useSalesData()`, `useErrorLogs()` hooks with `useQuery`.  
   - Configure staleTime, cacheTime, and retry options per query.

3. **Pagination & Infinite Scroll**  
   - Use `useInfiniteQuery` to load paginated log entries or events.  
   - Implement “Load More” or infinite scrolling for the logs panel.

4. **Background Refetch & Polling**  
   - Set up polling (refetchInterval) for live metrics updates every X seconds.  
   - Show a small “Last updated” timestamp and a manual refresh button via `refetch()`.

5. **Mutations & Optimistic Updates**  
   - Use `useMutation` to allow admin actions (e.g., flag error, annotate log).  
   - Implement optimistic updates: update UI immediately, rollback on error.

6. **Query Invalidation & Dependent Queries**  
   - Invalidate relevant queries after mutations (e.g., after updating a metric).  
   - Use dependent queries to fetch details only if an ID is selected.

7. **Error Handling & Retry**  
   - Display toast notifications for errors.  
   - Customize retry logic (exponential backoff) per query.

8. **Devtools Integration**  
   - Add React Query Devtools for debugging query cache and states.

9. **Performance Optimizations**  
   - Memoize heavy chart components.  
   - Use `select` option in queries to transform data.

10. **Testing**  
    - Mock server responses and test hooks using MSW and `@testing-library/react-hooks`.

---

### 🔨 Step-by-Step Roadmap

| Phase                        | Goals                                                                                   |
|------------------------------|-----------------------------------------------------------------------------------------|
| **1. Setup & QueryClient**   | Install React Query. Wrap app with `QueryClientProvider`.                                |
| **2. Basic Queries**         | Implement `useUserStats` and `useSalesData` with `useQuery`.                            |
| **3. Infinite Scroll**       | Add `useInfiniteQuery` for log entries. Integrate infinite scrolling.                    |
| **4. Polling & Refetch**     | Configure `refetchInterval` and manual refresh.                                         |
| **5. Mutations**             | Build `useMutation` hooks for admin actions with optimistic updates.                    |
| **6. Invalidation & Depends**| Invalidate queries after mutations; set up dependent queries for detail panels.          |
| **7. Error & Retry**         | Add UI feedback for errors and configure retry/backoff.                                 |
| **8. Devtools**              | Integrate React Query Devtools.                                                         |
| **9. Optimize & Select**     | Memoize charts and use `select` to shape data.                                          |
| **10. Testing**              | Test query/mutation hooks with MSW and React Testing Library.                          |

---