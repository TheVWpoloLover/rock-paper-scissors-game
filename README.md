# Rock Paper Scissors

A responsive, animated Rock Paper Scissors game built with plain HTML, CSS, and JavaScript. Play against the computer in a first-to-three match, track wins, losses, and ties, and reset whenever you want.

## Play locally

No installation or build step is required.

1. Clone or download this repository.
2. Open `index.html` in a modern browser.

For a local web server, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## How to play

- Choose **✊ Rock**, **✋ Paper**, or **✌️ Scissors**.
- The computer makes a random choice and the round result appears.
- The first player to three wins takes the match. Ties are tracked separately.
- Select **Reset Game** to clear all scores and start again.

## What this project teaches

- **HTML and accessibility:** semantic page structure, labelled buttons, and live round announcements.
- **CSS and responsive design:** Grid, flexible sizing, breakpoints, focus states, and reduced-motion support.
- **JavaScript events and DOM updates:** reacting to choices and updating the interface.
- **Game rules and conditionals:** comparing moves and deciding win, loss, or tie.
- **State management:** tracking both players' scores, ties, rounds, and match completion.
- **Randomness and timing:** selecting a computer move and coordinating a short reveal animation.

## Project files

- `index.html` — game layout and controls
- `style.css` — responsive visual design and round animations
- `script.js` — game rules, scoring, and reset behavior

The project uses no frameworks or external game APIs. Google Fonts load when available, with system fonts as a fallback.
