

# Group Booking Form Project

This project is a quickly built group booking form, developed to meet modern web development standards with a focus on performance, accessibility, and maintainability.

## Key Features & Implementation

- **Internationalization (i18n)**: Full support for UK English (en-GB) and German (de-DE) using `next-intl`, featuring a seamless language switcher in the header for an intuitive user experience.

- **Performance & Rendering**: An optimized pipeline with Server-Side Rendering (SSR) contributing to a perfect Lighthouse performance score.

- **Form Behaviour & Validation**: A dual-layer validation system with `react-hook-form` and Yup for client-side validation, and a simple server-side validation in the POST API endpoint.

- **Accessibility (a11y)**: Adheres to WCAG 2.2 AA guidelines with semantic HTML, comprehensive ARIA attributes, and full keyboard navigability.

- **Architecture & State Management**: A TypeScript-based, scalable architecture with predictable state management via React Context.

- **Unit Testing**: Unit testing with Jest and React Testing Library to ensure component reliability and functionality.

- **Light and Dark Theme**: a link on the header to see the german translation

- **Storybook**: Component documentation via Storybook

- **CI Actions**: A basic CI/CD pipeline with GitHub Actions,

## Lighthouse Scores Breakdown

As of the latest audit, the project achieved the following Lighthouse scores, reflecting its optimization across key metrics:

- **Performance (100)**: A perfect score driven by a First Contentful Paint (FCP) of 0.4 seconds, ensuring instant content visibility, and a Total Blocking Time (TBT) of 40ms, minimizing interactivity delays. The Speed Index of 0.4 seconds confirms swift visual completion, while optimized assets and a minimal main-thread workload ensure efficiency across devices.

- **Accessibility (86)**: A strong baseline with semantic HTML and ARIA implementation, enhanced by keyboard navigability. Opportunities remain for advanced color contrast and focus management to push this score higher.

- **Best Practices (100)**: Perfect adherence to modern standards, including secure HTTPS usage, dependency management, and error-free console output.

- **SEO (83)**: Solid visibility with meta tags, logical structure, and descriptive links, with potential for further content and keyword optimization.

## Local Development

### Installation

Install dependencies with:

### Available Scripts

Run the development server:

```bash
npm run dev
```

Run unit tests:

```bash
npm run test
```

Check code quality with linter:

```bash
npm npm run lint
 dev
```

Launch Storybook:

```bash
npm run storybook
```
