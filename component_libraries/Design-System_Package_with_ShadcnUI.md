# Advanced Component Library Projects

Two comprehensive projects to master two popular React component ecosystems:
- **Shadcn/UI** (headless + styled components)  
- **Material UI** (MUI v5)  

Each project guides you through building real-world component libraries, theming, customization, documentation, and advanced patterns.

---

## 📍 Project A: Design System Package with Shadcn/UI

### 📖 Project Overview
Create a **self-hosted design system** using [shadcn/ui](https://github.com/shadcn/ui). Build a collection of atomic components (buttons, inputs, cards, modals, dropdowns), then compose them into composite components. Package and publish the system as an npm module with full theming and documentation.

### 🚩 Core Requirements

1. **Atomic Components**  
   - Build base components (`Button`, `Input`, `Checkbox`, `Select`, `Tooltip`) using shadcn/ui primitives and Tailwind classes.  
   - Support variants (size, color, outline/filled) via utility props.

2. **Composite Components**  
   - Compose atomic pieces into complex components: `DataTable` (with sortable headers, pagination), `DatePicker`, and `RichTextEditor`.  
   - Expose clean prop APIs and slots for customization.

3. **Theming & Tokens**  
   - Define a theme object (colors, spacing, typography) and wire into components via Context.  
   - Support dark, light, and custom themes dynamically.

4. **Accessibility & ARIA**  
   - Ensure all components include proper ARIA attributes, focus management, and keyboard navigation per WAI-ARIA guidelines.

5. **Documentation Site**  
   - Generate a static docs site (Next.js + MDX) showing each component with live playgrounds.  
   - Use `@storybook/react` for interactive Storybook stories and controls.

6. **Package & Publish**  
   - Configure Rollup or Vite for bundling ES and CJS outputs.  
   - Set up automated versioning (e.g., Semantic Release) and publish scripts.

7. **Testing & Quality**  
   - Write unit tests for critical components (Jest + React Testing Library).  
   - Enforce code quality with ESLint, Prettier, and TypeScript strict mode.

8. **Performance & Optimization**  
   - Tree-shakeable imports: ensure unused components aren’t bundled.  
   - Optimize SSR by handling style injection correctly.

---

### 🔨 Step-by-Step Roadmap

| Phase                     | Goals                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------|
| **1. Scaffold Package**   | Initialize TypeScript library, install shadcn/ui, Tailwind. Configure build tool (Rollup).|
| **2. Atomic Components**  | Build `Button`, `Input`, etc., with variant props and slots.                               |
| **3. Composite Pieces**   | Compose `DataTable` and `DatePicker`; expose clean APIs.                                    |
| **4. Theming**            | Implement theme provider and token context; add dark/light switch.                         |
| **5. Accessibility**      | Audit ARIA roles, keyboard nav; fix any issues.                                            |
| **6. Documentation**      | Set up Next.js MDX site and Storybook; write examples.                                      |
| **7. Bundle & Publish**   | Configure outputs, versioning, and publish script.                                         |
| **8. Testing & Linting**  | Add Jest tests; enforce ESLint/Prettier rules.                                             |
| **9. Optimization**       | Verify tree-shaking; test SSR integration in Next.js.                                      |

---