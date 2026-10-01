# expo-product-explorer

A small Expo (React Native) app for the SMD task on Git, GitHub and GitHub Actions. It shows a list of products and has chips to filter them by category. The header shows my name and roll number.

## Run it

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `i` for the iOS simulator or `a` for an Android emulator.

## Project structure

- `App.js` - the home screen, keeps the selected category in state
- `components/` - `Header`, `CategoryFilter` and `ProductCard`
- `data/products.js` - the product list and the category names
- `.github/workflows/expo-ci.yml` - the CI workflow
- `Screenshot/` - screenshots for the submission

## Lint

```bash
npm run lint
```

## GitHub Actions

The `Expo CI` workflow runs on every push to `main` and on every pull request into `main`. It checks out the code, sets up Node 22, runs `npm ci` and then `npm run lint`.

While doing the break and fix part I found that `expo lint` only checks the `src`, `app` and `components` folders by default, so `App.js` was skipped and my deliberate error still passed. The lint script is now `expo lint .` so the whole project is checked.

## Screenshots

| File | What it shows |
| --- | --- |
| `Screenshot/01-local-project.png` | The project folder on my computer |
| `Screenshot/02-expo-qr.png` | The Expo QR code after `npx expo start` |
| `Screenshot/03-updated-ui.png` | The app running on the iOS simulator |
| `Screenshot/04-github-actions.png` | The workflow run on `main` finishing successfully |
| `Screenshot/05-actions-failed.png` | The failed run with the lint error (break the pipeline) |
| `Screenshot/06-actions-run-history.png` | The run history: pass, fail, then pass again after the fix |
