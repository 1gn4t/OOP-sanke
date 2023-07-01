import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Snake from "./snake.js";
import Score from "./score.js";
import Berry from "./berry.js";

class Game {
  constructor(container) {
    this.canvas = new Canvas();
    this.snake = new Snake(this.canvas);
    this.berry = new Berry(this.canvas);
    this.score = new Score(".score");
    this.modal = document.querySelector(".modal");
  }

  startGame() {
    this.modal.addEventListener("click", (evt) => {
      this.modal.classList.toggle("hide");
      this.addDOMCanvas();
      new GameLoop(this.update.bind(this), this.draw.bind(this));
    });
  }

  update() {
    this.snake.update(this.berry, this.score, this.canvas);
  }

  draw() {
    this.canvas.ctx.clearRect(
      0,
      0,
      this.canvas.element.width,
      this.canvas.element.height
    );
    this.snake.draw(this.canvas.ctx);
    this.berry.draw(this.canvas.ctx);
  }

  addDOMCanvas() {
    const container = document.querySelector(".canvas-wrap");
    container.append(this.canvas.element);
  }
}

const game = new Game();

game.startGame();
