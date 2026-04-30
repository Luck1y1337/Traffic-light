# Traffic Light  🚦

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-fast-purple?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Yarn-package-blue?logo=yarn" alt="Yarn" />
  <img src="https://img.shields.io/badge/Status-Ready%20to%20run-success" alt="Status" />
</p>

---

## ✨ About

Traffic Light is a clean, beginner-friendly React project that simulates a real traffic signal:
- Red, yellow, and green lights change in a loop with timers.
- **Start / Stop** button controls the main cycle.
- **Emergency** mode enables yellow blinking only.

Simple code inside, professional presentation outside.

## 🧰 Technologies

- **React** (functional components)
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**
- **Yarn**

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Open the local URL from terminal (usually `http://localhost:5173`).

## ⚙️ Traffic Light Logic

1. Press **Start** to run the cycle.
2. **Red** turns on with countdown.
3. Then **Green** runs with countdown and blinking near the end.
4. **Yellow** appears before switching back to red.
5. Press **Emergency** to stop normal cycle and blink yellow.
6. Press **Stop Emergency** to leave emergency mode.

## 📜 Scripts

- `yarn dev` — run in development mode
- `yarn build` — create production build
- `yarn preview` — preview production build locally

## 🎯 Learning Goal

Practice core React basics:
- move logic from plain `HTML/CSS/JS` to React,
- manage app state with `useState`,
- handle timers with `useEffect`,
- avoid direct DOM manipulation.
