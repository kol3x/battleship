import { Player } from "./classes/player";
import { drawPlayerBoard, drawBotBoard, createGameboardsDiv } from "./dom";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".startButton");
  startButton.addEventListener("click", () => {
    startButton.remove();
    let human = new Player(true, false);
    let bot = new Player(false, true);

    bot.gameboard.randomPlaceShip(5);
    bot.gameboard.randomPlaceShip(4);
    bot.gameboard.randomPlaceShip(3);
    bot.gameboard.randomPlaceShip(2);
    bot.gameboard.randomPlaceShip(2);
    bot.gameboard.randomPlaceShip(1);
    bot.gameboard.randomPlaceShip(1);

    createGameboardsDiv();
    drawPlayerBoard(human, bot);
    drawBotBoard(bot, human);
  });
});