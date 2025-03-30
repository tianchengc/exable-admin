# Knowledge Base for Copilot

## Prompts for Copilot
- "Generate a REST API endpoint for [resource]."
- "Write a function to handle [specific task]."
- "Refactor this code to improve readability and performance."
- "Add error handling for [specific scenario]."
- "Create unit tests for [functionality]."

## Hints for Copilot
- Use consistent naming conventions across the project.
- Follow the project's coding style and linting rules.
- Prioritize readability and maintainability in generated code.
- Ensure compatibility with the existing project setup and dependencies.
- Avoid introducing breaking changes unless explicitly requested.

## Best Practices for Naming Conventions and File Organization
- Use **PascalCase** for Components, Pages, and Contexts (e.g., `Button.tsx`, `Dashboard.tsx`).
- Use **camelCase** for Hooks, Services, and Utility Functions (e.g., `useAuth.ts`, `fetchData.ts`).
- Use **kebab-case** for asset names (e.g., `button.module.scss`, `logo-dark.svg`).
- Keep related files together (e.g., `Button.tsx` and `Button.module.scss`).
- Use **camelCase** for css class names in css module files.
- Centralize API calls in a `services/` folder (e.g., `authService.ts`, `userApi.ts`).
- Use TypeScript interfaces with **PascalCase** (e.g., `UserTypes.ts`, `AuthTypes.ts`).
- API info is stored in api.json file.

