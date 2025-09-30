# Catholic Jeopardy - Ad Altare Dei Edition

An interactive Catholic trivia game designed for scouts working on the Ad Altare Dei Religious Emblem. This web-based Jeopardy-style game helps scouts learn about Scripture, Sacraments, Mass & Liturgy, Church History, and Saints & Service.

![Catholic Jeopardy Game](https://img.shields.io/badge/Game-Jeopardy-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Features

- **5 Categories**: Scripture, Sacraments, Mass & Liturgy, Church History, and Saints & Service
- **25 Questions**: 5 difficulty levels (100-500 points) per category
- **Multi-team Support**: Play with 1-6 teams
- **Customizable Timer**: Set timer duration (0-120 seconds) or disable it entirely
- **Team Names**: Customize team names for personalized gameplay
- **Score Tracking**: Automatic scoring with penalties for incorrect answers
- **Turn-based Play**: Team that answers correctly keeps control of the board
- **Visual Feedback**: Color-coded correct/incorrect answers with explanations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Quick Start

### Option 1: Download and Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/catholic-jeopardy.git
   cd catholic-jeopardy
   ```

2. **Open in browser**:
    - Simply open `index.html` in your web browser
    - No server or build process required!

### Option 2: GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from branch" and choose `main` branch
4. Your game will be live at `https://yourusername.github.io/catholic-jeopardy/`

## 📁 Project Structure

```
catholic-jeopardy/
├── index.html          # Main HTML structure
├── styles.css          # All styling and CSS
├── game.js             # Game logic and functionality
└── README.md           # This file
```

## 🎮 How to Play

1. **Game Setup**:
    - Enter the number of teams (1-6)
    - Set timer duration (recommended: 30-60 seconds, or 0 to disable)
    - Customize team names (optional)
    - Click "Start Game"

2. **Gameplay**:
    - The active team selects a category and point value
    - A question appears with 4 multiple-choice answers
    - Click an answer before time runs out
    - **Correct answer**: Team earns points and keeps control
    - **Incorrect answer**: Team loses points and control passes to next team
    - **Time expires**: Control passes to next team with no points awarded

3. **Winning**:
    - Play continues until all questions are answered
    - The team with the highest score wins!

## 🎨 Customization

### Adding New Questions

Edit the `gameData` object in `game.js`:

```javascript
"Your Category": {
    100: {
        question: "Your question here?",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correct: 1, // Index of correct answer (0-3)
        explanation: "Explanation of the answer"
    },
    // Add more difficulty levels...
}
```

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #1a237e;
    --accent-gold: #ffd700;
    --correct-green: #4caf50;
    --incorrect-red: #f44336;
    /* ... more variables */
}
```

### Adjusting Categories

To change the number of categories:
1. Update the `gameData` object in `game.js`
2. Adjust `grid-template-columns` in `.game-board` class in `styles.css`

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks or dependencies required
- **BEM Methodology**: CSS naming convention for maintainability

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Features
- ARIA labels and roles
- Semantic HTML5 elements
- Keyboard navigation support
- Screen reader friendly
- High contrast colors

## 📚 Educational Content

The game covers essential Catholic knowledge for the Ad Altare Dei emblem:

- **Scripture**: Biblical knowledge and Gospel understanding
- **Sacraments**: Seven sacraments and their significance
- **Mass & Liturgy**: Understanding the Mass and liturgical elements
- **Church History**: Key historical events and figures
- **Saints & Service**: Saints' lives and Works of Mercy

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-questions`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit**: `git commit -m "Add new Scripture questions"`
6. **Push**: `git push origin feature/new-questions`
7. **Open a Pull Request**

### Ideas for Contributions
- Add new question categories
- Translate to other languages
- Improve accessibility
- Add sound effects
- Create printable scorecards
- Add difficulty settings

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Inspired by the classic Jeopardy! game show
- Created for Catholic scouts working on the Ad Altare Dei Religious Emblem
- Question content based on Catholic teachings and traditions

## 📧 Contact

Have questions or suggestions? Feel free to:
- Open an issue on GitHub
- Submit a pull request
- Contact the maintainer at [your-email@example.com]

## 🌟 Star This Repository

If you find this project helpful, please consider giving it a star ⭐ on GitHub!

---

**Made with ❤️ for Catholic scouts and their faith journey**