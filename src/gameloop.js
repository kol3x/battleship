import { Player } from "./classes/player";
import { drawPlayerBoard, drawBotBoard, createGameboardsDiv } from "./dom";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".startButton");
  startButton.addEventListener("click", () => {
    startButton.remove();

    let human = new Player(true, false);
    let bot = new Player(false, true);

    human.gameboard.randomPlaceShip(5);
    human.gameboard.randomPlaceShip(4);
    human.gameboard.randomPlaceShip(3);
    human.gameboard.randomPlaceShip(2);
    human.gameboard.randomPlaceShip(2);
    human.gameboard.randomPlaceShip(1);
    human.gameboard.randomPlaceShip(1);

    human.gameboard.log();

    bot.gameboard.randomPlaceShip(5);
    bot.gameboard.randomPlaceShip(4);
    bot.gameboard.randomPlaceShip(3);
    bot.gameboard.randomPlaceShip(2);
    bot.gameboard.randomPlaceShip(2);
    bot.gameboard.randomPlaceShip(1);
    bot.gameboard.randomPlaceShip(1);
    bot.gameboard.log();

    createGameboardsDiv();
    drawPlayerBoard(human);
    drawBotBoard(bot, human);
  });
});

function didAnyoneWin(human, bot) {
  if (bot.gameboard.allShipsSunk()) {
    return console.log("You've sunk all enemy ships! Congratulations!");
  } else if (human.gameboard.allShipsSunk()) {
    return console.log("You've lost the fight, but the war is not over yet...");
  }
  return false;
}

export { didAnyoneWin };
