# Frontend Interview Prep

A local Coderbyte-style workspace for practicing frontend interview challenges. Built with Vite + React + TypeScript.

**114 challenges** across two tracks:
- **54 React challenges**: UI components, custom hooks, state management, performance, API integration, games
- **60 JavaScript & DSA challenges**: polyfills, strings/arrays, linked lists, trees/graphs, dynamic programming, sorting

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the dashboard.

## How It Works

1. **Browse** challenges on the dashboard — filter by difficulty, category, or language (TS/JS)
2. **Click** a challenge to see instructions, hints, and a live preview (React) or test runner (DSA)
3. **Edit** the challenge's `index.tsx` / `index.ts` file in your editor
4. **Test** your solution: `npm test -- <challenge-slug>` (e.g., `npm test -- 01-counter`)
5. **Compare** with the reference solution when you're ready

## Project Structure

```
src/
  challenges/          # React challenges (each folder is one challenge)
    01-counter/
      index.tsx        # YOUR code goes here (boilerplate to start)
      solution.tsx     # Reference solution (don't peek too early!)
      index.test.tsx   # Test cases to validate your solution
      README.md        # Challenge instructions
      meta.json        # Metadata (title, difficulty, category, hints)
    ...
  dsa/                 # JavaScript & DSA challenges
    01-array-map/
      index.ts         # YOUR code goes here
      solution.ts      # Reference solution
      index.test.ts    # Test cases
      README.md        # Problem statement
      meta.json        # Metadata
    ...
  components/          # Dashboard and layout UI
  hooks/               # Shared hooks (timer, progress tracking)
  lib/                 # Challenge registry (auto-discovery)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server with hot reload |
| `npm test` | Run all tests in watch mode |
| `npm test -- <slug>` | Run tests for a specific challenge |
| `npm run test:run` | Run all tests once (CI mode) |
| `npm run new -- "Title" --type=react --lang=ts --difficulty=medium --category=components` | Scaffold a new challenge |
| `npm run build` | Build for production |

## Creating New Challenges

```bash
# React challenge in TypeScript
npm run new -- "Infinite Scroll List" --type=react --category=components --difficulty=hard --lang=ts

# DSA challenge in JavaScript
npm run new -- "Binary Search Tree" --type=dsa --category=trees-graphs --difficulty=medium --lang=js
```

This creates a new folder with boilerplate files ready to fill in.

## Challenge Categories

### React
- **Components** — Counter, Toggle, Accordion, Star Rating, Tabs, Modal, Carousel, etc.
- **Custom Hooks** — useDebounce, useThrottle, useFetch, useLocalStorage, etc.
- **State Management** — Todo App, Shopping Cart, Undo/Redo, Compound Components, etc.
- **Performance** — Memoization, Virtualized List, Infinite Scroll, Lazy Loading, etc.
- **API Integration** — Job Board, Weather Dashboard, Polling, File Upload, etc.
- **Games** — Tic Tac Toe, Memory Game, Snake, Wordle Clone

### JavaScript & DSA
- **JS Polyfills** — Array.map, Array.reduce, Function.bind, Promise.all, Debounce, etc.
- **Strings & Arrays** — Two Sum, Valid Anagram, Sliding Window, Merge Intervals, etc.
- **Linked Lists & Stacks** — Stack, Queue, Reverse Linked List, LRU Cache, etc.
- **Trees & Graphs** — BFS, DFS, Validate BST, Number of Islands, Course Schedule, etc.
- **Dynamic Programming** — Climbing Stairs, Coin Change, Knapsack, Word Break, etc.
- **Sorting & Searching** — Binary Search, Merge Sort, Quick Sort, Dutch Flag, etc.

## Tips for Interview Prep

1. **Time yourself** — use the built-in timer (most interviews are 30-60 min)
2. **Read tests first** — understand what's expected before coding
3. **Don't peek at solutions** — try for 20+ min before hints, 40+ min before solutions
4. **Track your progress** — mark challenges complete on the dashboard
5. **Add your own** — after a real interview, scaffold the question and practice it
6. **Revisit** — redo completed challenges a week later to build muscle memory

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) — routing
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) — testing
