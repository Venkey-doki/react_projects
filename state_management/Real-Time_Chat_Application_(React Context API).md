# State Management Mastery

Explore two comprehensive projects to conquer **React Context API** and **Zustand** for state management in complex applications.

---

## 📍 Project A: Real-Time Chat Application (React Context API)

### 📖 Project Overview

Build a multi-room chat app with user authentication, live messaging, and theme preferences. Use React Context API combined with `useReducer` to manage global state across deep component trees and illustrate Context patterns.

### 🚩 Core Requirements

1. Authentication Context

   - Create an `AuthContext` to store user token, profile, and login/logout functions.
   - Protect chat routes with a `RequireAuth` component that redirects to login if unauthenticated.

2. Chat State Context

   - Use `useReducer` within `ChatContext` to manage chat rooms, messages, and typing indicators.
   - Actions: `JOIN_ROOM`, `LEAVE_ROOM`, `RECEIVE_MESSAGE`, `SEND_MESSAGE`, `SET_TYPING`.

3. Theme Context

   - Implement a `ThemeContext` to toggle light/dark mode.
   - Persist user preference in `localStorage` and load on app init.

4. Context Composition

   - Combine multiple providers (`AuthContext`, `ChatContext`, `ThemeContext`) in a single `AppProviders` component.
   - Build custom hooks (`useAuth()`, `useChat()`, `useTheme()`) that encapsulate `useContext` calls and throw errors if used outside providers.

5. WebSocket Integration

   - Connect to a WebSocket server on `ChatContext` mount.
   - Dispatch actions on incoming messages and handle cleanup on unmount.

6. Optimistic Updates

   - Show sent messages immediately in UI before server acknowledgment.
   - Handle acks and update message status.

7. Performance Considerations

   - Split contexts where necessary to avoid over-rendering (e.g., separate `TypingContext`).
   - Use `React.memo` for message list items and `useCallback` for dispatching actions.

8. Error Handling

   - Provide context-level error boundaries for each provider.
   - Display fallback UIs on connection failure.

9. Testing

   - Unit-test reducers, context hooks, and components with mocked providers.
   - Integration tests to simulate login, joining rooms, and sending messages.

---

### 🔨 Step-by-Step Roadmap

| Phase                     | Goals                                                                           |
| ------------------------- | ------------------------------------------------------------------------------- |
| 1. Setup & Auth Context   | Scaffold app. Create `AuthContext` with login/logout, protect routes.           |
| 2. Chat Context & Reducer | Define `ChatContext` and reducer for room/message actions.                      |
| 3. WebSocket Hook         | Build `useChatSocket` hook for connect/disconnect and dispatch context actions. |
| 4. Theme Context          | Implement `ThemeContext`, `useTheme`, and persist to `localStorage`.            |
| 5. Context Composition    | Combine providers in `AppProviders`. Refactor components to use context hooks.  |
| 6. Optimistic Updates     | Add optimistic UI for message sending and status updates.                       |
| 7. Performance Tuning     | Memoize message items, split contexts if needed, optimize provider granularity. |
| 8. Error Boundaries       | Wrap providers with error boundary components and display fallback UIs.         |
| 9. Testing                | Write unit and integration tests for contexts, hooks, and key flows.            |

---