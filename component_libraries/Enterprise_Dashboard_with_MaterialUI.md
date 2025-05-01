# Advanced Component Library Projects

Two comprehensive projects to master two popular React component ecosystems:
- **Shadcn/UI** (headless + styled components)  
- **Material UI** (MUI v5)  

Each project guides you through building real-world component libraries, theming, customization, documentation, and advanced patterns.

---

## 📍 Project B: Enterprise Dashboard with Material UI

### 📖 Project Overview
Build a **complex admin dashboard** using [Material UI v5](https://mui.com/). Implement custom themes, component overrides, dynamic layouts, and integration with MUI’s data grid and charting components.

### 🚩 Core Requirements

1. **Theming & Customization**  
   - Create a custom MUI theme (palette, typography, shape).  
   - Override default component styles (e.g., buttons, tabs) via `theme.components`.

2. **Layout System**  
   - Use MUI’s `Grid` and `Box` for responsive dashboard layout (sidebar, header, content).  
   - Create a resizable, collapsible sidebar component.

3. **Data Grid Integration**  
   - Integrate `@mui/x-data-grid` for tabular data with sorting, filtering, and inline editing.  
   - Implement server-side pagination and virtual scrolling for large datasets.

4. **Charting & Visualization**  
   - Use MUI’s charts (via `@mui/x-charts`) or integrate Recharts wrapped in MUI `Card` components.  
   - Create a dashboard summary with real-time updates.

5. **Custom Components & Hooks**  
   - Build a `DateRangePicker` by composing MUI’s pickers and forms.  
   - Write custom hooks (`useThemeMode`, `useResponsiveValue`) for reactive behaviors.

6. **Authentication & Guards**  
   - Implement protected routes using React Router with MUI’s `Drawer` and `AppBar` components.  
   - Show login form with validation using MUI `TextField` and `Formik` or `react-hook-form`.

7. **Accessibility & RTL Support**  
   - Ensure components meet WCAG 2.1 AA standards.  
   - Add right-to-left language support via theme direction toggle.

8. **Performance Optimization**  
   - Lazy-load heavy modules with dynamic imports and `Suspense`.  
   - Use `unstable_useEnhancedEffect` or `useMemo` to avoid layout thrashing.

9. **Documentation & Storybook**  
   - Document custom components and theme in Storybook with MUI’s addons.  
   - Provide live examples of overrides and theme variations.

10. **Testing**  
    - Write unit tests for custom hooks and components.  
    - End-to-end tests for critical flows using Cypress and MUI testing utilities.

---

### 🔨 Step-by-Step Roadmap

| Phase                        | Goals                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------|
| **1. Setup & Theme**         | Initialize CRA/Vite; install MUI and X packages; create custom theme.                        |
| **2. Layout & Components**   | Build responsive layout with `Grid`, `Drawer`, `AppBar`.                                     |
| **3. Data Grid**             | Integrate data grid with server-side pagination and inline editing.                          |
| **4. Charts & Cards**        | Add charts in MUI `Card` with real-time dummy data.                                          |
| **5. Custom Hooks**          | Implement `useThemeMode`, `useResponsiveValue`; apply across components.                     |
| **6. Auth & Guarded Routes** | Set up React Router, login form, and route protection with MUI UI.                           |
| **7. Accessibility & RTL**   | Audit WCAG; add RTL toggle and test.                                                         |
| **8. Storybook & Docs**      | Create stories for custom components and theme variations.                                   |
| **9. Performance**           | Add code splitting and optimizations; use profiling tools.                                   |
| **10. Testing**              | Write Jest tests and Cypress end-to-end tests for key user journeys.                         |

