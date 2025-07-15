# Next.js URL as State

This is a Proof of Concept (POC) web application demonstrating how to use the **URL as state** in a Next.js app to filter and manage Orders in an admin panel.

Instead of using `useState` to track filter values, this approach leverages the URL query parameters. This has several benefits:

- Enable shareable and bookmarkable links
- Improve UX with better navigation and deep linking

## Features

- Filter orders using query parameters
- Keep state in the URL — no extra global or local state needed
- Navigate directly to filtered views via links

## Notes:

- Currently using Custom hook to update URL state when click. Will implement a more robust way to handle this via [NUQS](https://nuqs.47ng.com/).

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/bkanhu/nextjs-url-as-state.git

cd nextjs-url-state
```

**2. Install Dependencies:**

```bash
npm install
# or
yarn install
```

**3. Run the Development Server:**

```bash
npm run dev
# or
yarn dev
```

**4. View the Application:**

Open your browser and navigate to `http://localhost:3000` to see the application in action.
