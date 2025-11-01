# Development Setup Guide

## Package Manager

This project uses **pnpm** as the package manager. Please ensure you have pnpm installed globally.

### Install pnpm

```bash
npm install -g pnpm
# or
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## Installing Dependencies

```bash
pnpm install
```

## Available Scripts

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors automatically
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## Pre-commit Hooks (Husky)

This project uses **Husky** to run pre-commit hooks that ensure code quality before commits.

### What Happens on Commit

When you run `git commit`, the following will automatically execute:

1. **Prettier** - Formats your code
2. **ESLint** - Checks for linting errors and fixes them

If there are any errors that cannot be auto-fixed, the commit will be blocked until you fix them.

### Configuration Files

- **`.prettierrc`** - Prettier configuration
- **`.prettierignore`** - Files to ignore for Prettier
- **`.lintstagedrc.json`** - lint-staged configuration
- **`eslint.config.mjs`** - ESLint configuration
- **`.husky/pre-commit`** - Pre-commit hook script

### Prettier Settings

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 90,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### ESLint Rules

Key rules enforced:

- ✅ No unused variables (with exceptions for `_` prefix)
- ✅ Warn on `any` types
- ✅ No console.log (console.warn and console.error are allowed)
- ✅ Prefer const over let
- ✅ No var keyword
- ✅ Import order alphabetically organized

## Bypassing Hooks (Not Recommended)

If you absolutely need to bypass the pre-commit hooks:

```bash
git commit --no-verify -m "your message"
```

⚠️ **Note**: This is not recommended as it skips code quality checks.

## Manual Code Formatting

To manually format all files:

```bash
pnpm format
```

To check if files are formatted correctly:

```bash
pnpm format:check
```

## Manual Linting

To lint all files:

```bash
pnpm lint
```

To automatically fix linting issues:

```bash
pnpm lint:fix
```

## Troubleshooting

### Husky hooks not working

1. Ensure the hooks are executable:

   ```bash
   chmod +x .husky/pre-commit
   chmod +x .husky/_/husky.sh
   ```

2. Reinitialize git hooks:
   ```bash
   pnpm prepare
   ```

### Prettier conflicts with ESLint

The project is configured to work with both tools harmoniously. Prettier handles formatting, while ESLint handles code quality rules.

### Package manager conflicts

Always use **pnpm** for this project. If you accidentally used npm or yarn:

```bash
rm -rf node_modules package-lock.json yarn.lock
pnpm install
```

## Git Workflow

1. Make your changes
2. Stage your files: `git add .`
3. Commit: `git commit -m "your message"`
4. The pre-commit hook will run automatically:
   - Format code with Prettier
   - Fix ESLint issues
   - If successful, commit proceeds
   - If errors exist, commit is blocked
5. Fix any remaining errors and try again
6. Push: `git push`

## Benefits of This Setup

- ✅ **Consistent Code Style**: Everyone's code looks the same
- ✅ **Catch Errors Early**: Find issues before they reach CI/CD
- ✅ **Automated Formatting**: No manual formatting needed
- ✅ **Better Code Review**: Focus on logic, not style
- ✅ **Type Safety**: Enforced TypeScript best practices

## IDE Integration (Recommended)

### VS Code

Install these extensions:

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### WebStorm/IntelliJ

1. Enable Prettier: Settings → Languages & Frameworks → JavaScript → Prettier
2. Enable ESLint: Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
3. Enable "Run eslint --fix on save"

## Contributing

Before submitting a PR:

1. Ensure all code passes linting: `pnpm lint`
2. Ensure all code is formatted: `pnpm format:check`
3. Commit your changes (pre-commit hooks will run)
4. All tests should pass (when implemented)

---

**Happy Coding! 🚀**
