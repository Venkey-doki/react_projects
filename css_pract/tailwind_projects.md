# Advanced Tailwind CSS Workshop

Dive deep into Tailwind CSS by building a **component library** and a **responsive marketing site** from scratch. You’ll master utility classes, theming, responsive design, plugins, and optimization.

---

## 📍 Project A: UI Component Library

### 📖 Project Overview
Create a **reusable UI component library** (buttons, cards, modals, form controls, navigation) using Tailwind CSS and [Tailwind UI](https://tailwindui.com/) patterns. Focus on composability, theming, and documentation.

### 🚩 Core Requirements

1. **Utility-First Components**  
   - Build components purely with Tailwind utility classes (no custom CSS).  
   - Implement variants (size, color, disabled state) via class composition.

2. **Responsive Design**  
   - Ensure each component adapts to breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).  
   - Use responsive utility prefixes and `container` classes.

3. **Dark/Light Mode**  
   - Implement theming using `dark:` variants and a toggle switch.  
   - Persist theme preference in `localStorage`.

4. **Plugin Usage**  
   - Configure Tailwind plugins: `@tailwindcss/forms`, `@tailwindcss/typography`, and a custom plugin for additional utilities (e.g., aspect ratios).  
   - Demonstrate custom plugin usage in at least one component.

5. **Component Organization**  
   - Structure components with a clear directory: `components/Button`, `components/Card`, etc.  
   - Extract repeated class sets into [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) directives in CSS files if needed.

6. **Accessibility**  
   - Ensure components include appropriate ARIA attributes and focus states.  
   - Use `focus:` and `ring:` utilities for visible focus outlines.

7. **Documentation Site**  
   - Build a static site with MDX (e.g., Next.js or Astro) showcasing each component and usage examples.  
   - Include code snippets and live playground examples via [Tailwind Play](https://play.tailwindcss.com/).

8. **Optimization**  
   - Purge unused CSS in production builds.  
   - Analyze final bundle size and optimize utility usage.

---

### 🔨 Step-by-Step Roadmap

| Phase                     | Goals                                                                                |
|---------------------------|--------------------------------------------------------------------------------------|
| **1. Setup**              | Initialize project (Vite/Next.js). Install Tailwind and plugins.                     |
| **2. Base Components**    | Build Button, Card, Input components with variants.                                  |
| **3. Responsiveness**     | Add breakpoint-specific styles to each component.                                    |
| **4. Theming**            | Implement dark/light mode toggle and persistence.                                    |
| **5. Plugins**            | Configure forms, typography, and custom plugins; apply in components.               |
| **6. Accessibility**      | Add ARIA roles and focus styles; test keyboard navigation.                           |
| **7. Documentation**      | Create MDX pages for each component with live demos.                                 |
| **8. Optimization**       | Enable PurgeCSS; measure and reduce CSS bundle size.                                |

---

## 📍 Project B: Responsive Marketing Site

### 📖 Project Overview
Design and build a **multi-section marketing site** (hero, features, testimonials, pricing, FAQ, footer) using Tailwind CSS. Emphasize responsive layouts, animation integration, and performance.

### 🚩 Core Requirements

1. **Responsive Layout**  
   - Use Flexbox and Grid utilities for complex layouts.  
   - Ensure sections stack/reflow elegantly on mobile screens.

2. **Typography & Spacing**  
   - Define a typographic scale with `font-size`, `font-weight`, and `leading` utilities.  
   - Maintain consistent spacing with `space-y`, `space-x`, `p-`, `m-` utilities.

3. **Custom Color Palette**  
   - Extend Tailwind theme with brand colors.  
   - Apply gradients and custom shadows for visual flair.

4. **Animations & Transitions**  
   - Animate elements on scroll using `@keyframes` in Tailwind config and `animate-` utilities.  
   - Add hover/focus transitions (`transition`, `duration`, `ease-in-out`).

5. **Mobile Navigation**  
   - Build a responsive navbar with hamburger menu.  
   - Animate menu open/close using Tailwind classes and minimal JavaScript.

6. **Media & Images**  
   - Use `object-cover`, `aspect-w`, `aspect-h` utilities for responsive images and videos.  
   - Implement a gallery with Tailwind’s grid and gap utilities.

7. **Performance**  
   - Optimize images (SVGs, compressed formats).  
   - Purge unused Tailwind classes and inline critical CSS for first paint.

8. **SEO & Accessibility**  
   - Use semantic HTML elements and `sr-only` for screen readers.  
   - Ensure color contrast ratios meet WCAG standards.

---

### 🔨 Step-by-Step Roadmap

| Phase                     | Goals                                                                                |
|---------------------------|--------------------------------------------------------------------------------------|
| **1. Setup & Theme**      | Initialize project. Configure custom theme colors and fonts in Tailwind config.      |
| **2. Hero & Features**    | Build hero section with responsive text and CTA. Create multi-column features layout.|
| **3. Testimonials & FAQ** | Design testimonial cards and collapsible FAQ using utilities and minimal JS.         |
| **4. Navbar & Footer**    | Implement responsive navbar with animated hamburger. Build footer with grid layout.  |
| **5. Animations**         | Add scroll-triggered animations and hover transitions.                              |
| **6. Images & Media**     | Integrate responsive images and gallery.                                            |
| **7. Performance**        | Enable CSS purging and critical CSS inlining.                                       |
| **8. Accessibility & SEO**| Add semantic tags, alt text, `sr-only` labels, and meta tags.                        |

