# Simon-Game

A classic Simon Says memory game implementation. Test your memory by following the sequence of colors and sounds!

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Game Rules](#game-rules)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## About

Simon-Game is a faithful recreation of the classic "Simon" electronic game from the 1980s. Players must replicate an increasingly complex sequence of button presses and sounds. Each round adds one more step to the pattern, challenging players to remember and repeat the entire sequence.

## Features

✨ **Interactive Gameplay** - Click buttons to play along with the game sequence  
🎨 **Colorful Design** - Four distinct colored buttons with visual feedback  
🔊 **Sound Effects** - Each button has a unique sound  
📈 **Progressive Difficulty** - Sequences get longer with each successful round  
🎯 **Score Tracking** - Keep track of how many rounds you've completed  
📱 **Responsive Design** - Works on desktop and mobile devices  
⌨️ **Keyboard Support** - Play using keyboard keys in addition to mouse clicks

## Demo

[Try the live demo here!](https://kotadiyameet2611.github.io/Simon-Game/)

## Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies required

### Local Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Kotadiyameet2611/Simon-Game.git
   cd Simon-Game
   ```

2. **Open the game**  
   - Double-click `index.html` to open in your default browser, or  
   - Right-click `index.html` and select "Open with" to choose a specific browser

3. **Start Playing**  
   - Click the "Start" button to begin the game

## How to Play

1. **Start the Game** - Click the "Start" or "Play" button to begin
2. **Watch the Sequence** - The game will flash and play a sound for each button
3. **Repeat the Sequence** - Click the buttons in the same order as the game
4. **Progress** - After each correct sequence, the game adds one more step
5. **Continue** - Keep repeating patterns until you make a mistake
6. **Game Over** - When you press the wrong button, the game ends and shows your score

### Keyboard Controls
- **A Key** - Green button (or Left Arrow)
- **S Key** - Red button (or Up Arrow)
- **D Key** - Yellow button (or Right Arrow)
- **F Key** - Blue button (or Down Arrow)
- **Enter** - Start the game
- **R** - Reset/Restart the game

## Game Rules

- ✅ Players must correctly repeat the entire sequence each round
- ✅ The game adds one new button press to the sequence each round
- ✅ Speed increases slightly with each successful round
- ❌ One wrong button press ends the game
- ❌ You must repeat the entire sequence correctly to advance

## Technologies Used

- **HTML5** - Semantic markup and game structure
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (Vanilla)** - Game logic, event handling, and interactivity
- **Web Audio API** - Sound generation
- **Local Storage** - High score persistence

## File Structure

```
Simon-Game/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Game logic and interactivity
├── README.md           # This file
└── assets/
    ├── sounds/
    │   ├── green.mp3
    │   ├── red.mp3
    │   ├── yellow.mp3
    │   └── blue.mp3
    └── images/
        └── favicon.ico
```

## Screenshots

### Main Game Screen
[Screenshot showing the four colored buttons in a square layout]

### Game Over Screen
[Screenshot showing the final score display]

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
   ```bash
   git clone https://github.com/Kotadiyameet2611/Simon-Game.git
   ```

2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit
   ```bash
   git commit -m "Add your commit message here"
   ```

4. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request with a clear description of your changes

### Areas for Contribution
- 🎨 UI/UX improvements
- 🎵 Additional sound effects
- 📊 Enhanced difficulty levels
- 🌐 Localization (multiple languages)
- 🐛 Bug fixes
- 📚 Documentation improvements

## Troubleshooting

**Game doesn't work?**
- Ensure your browser supports HTML5 and JavaScript
- Clear your browser cache and reload the page
- Try a different browser

**No sound?**
- Check your device volume
- Ensure your browser has audio permissions enabled
- Try muting and unmuting in browser settings

**Buttons not responding?**
- Make sure JavaScript is enabled in your browser
- Try refreshing the page
- Check browser console for errors (F12)

## Future Enhancements

- [ ] Difficulty levels (easy, normal, hard)
- [ ] Multiplayer mode
- [ ] Leaderboard system
- [ ] Themes (dark mode, light mode)
- [ ] Mobile app version
- [ ] Touch screen optimization

## Author

**Meet Kotadiya** - [@Kotadiyameet2611](https://github.com/Kotadiyameet2611)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the classic Simon electronic game by Milton Bradley
- Thanks to all contributors and players
- Sound effects sourced from free audio libraries

---

**Enjoy the game! 🎮 Can you beat your high score?**

*Last Updated: 2026-03-23 09:12:22*