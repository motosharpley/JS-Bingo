## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. A bingo card will be generated automatically.
4. Click the "Draw Next Ball" button to draw a bingo ball.
5. The "Get New Card" button will generate a new bingo card.
6. The "Reset" button will reset the current card and drawn balls.
7. The "Interim Game Ball Draw" button will draw the first 24 balls for an interim game.
8. The "Auto Play" button will automatically draw balls every 1 second until all balls are drawn or the user stops it.

## How It Works

- **bingo-card.js**: Contains the logic for generating the bingo card. It creates a grid with randomized numbers based on bingo rules.
- **ball-draw.js**: Simulates the drawing of bingo balls, ensuring no duplicates and following the standard bingo number ranges.
- **bingo-card.css**: Provides the styling for the bingo card, ensuring it is visually appealing and easy to read.
- **index.html**: Serves as the entry point, linking the JavaScript and CSS files to display the bingo card in the browser.
