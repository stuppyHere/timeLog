# TimeLog ⏱️

TimeLog is a simple Chrome extension built with React that lets you track how much time has passed since a particular moment.

Create multiple timers, give them names, choose a starting date and time, and keep your memories saved locally.

## ✨ Features

- **Custom Timers:** Create timers with your own titles.
- **Custom Start Time:** Choose a date and time from the past.
- **Automatic Start Time:** Leave the date field empty to start tracking from the current moment.
- **Multiple Timers:** Create and display multiple timers simultaneously.
- **Delete Timers:** Remove timers you no longer need.
- **Persistent Storage:** Timers are saved in the browser's local storage and remain available after reopening the extension.
- **Simple Interface:** A lightweight interface built with React and CSS.

## 🛠️ Built With

- HTML
- CSS
- JavaScript
- React
- Browser Local Storage

## 🚀 Getting Started

### Installation

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Run the build command configured in `package.json` (commonly `npm run build`).

### Load the Extension in Chrome

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the built extension folder containing `manifest.json`.

The exact build command and output folder depend on the project's configuration.

## 📖 How to Use

1. Open TimeLog from the Chrome extensions menu.
2. Enter a title for your timer. If you leave it empty, the default title is `Unknown`.
3. Choose a starting date and time, or leave it empty to use the current time.
4. Click **Start** to create your timer.
5. View the elapsed time on the timer card.
6. Delete timers when they are no longer needed.

## 💾 Data Storage

TimeLog uses the browser's `localStorage` to save timer data locally.

Each timer stores information such as its unique ID, title, and starting time. Timers are restored when the extension is opened again.

## 🎯 Project Goals

This project was built as a hands-on learning project to practise JavaScript, React components, state management, props, effects, and browser storage.

## 🔮 Future Improvements

- Improve the elapsed-time display.
- Improve the user interface and responsive layout.
- Add more flexible timer management.
- Explore additional features based on user needs.

---

**TimeLog** — Keep track of the time since your moments began. 💙
