import { Player } from "./classes/player";
import { drawPlayerBoard, drawBotBoard } from "./dom";
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  let human = new Player(true, false);
  let bot = new Player(false, true);

  human.gameboard.placeShip([0, 1], 5, "horizon");
  human.gameboard.placeShip([2, 2], 4, "horizon");
  human.gameboard.placeShip([4, 3], 3, "horizon");
  human.gameboard.placeShip([6, 0], 2, "horizon");
  human.gameboard.placeShip([9, 5], 2, "horizon");
  human.gameboard.placeShip([6, 7], 1, "horizon");
  human.gameboard.placeShip([8, 8], 1, "horizon");

  bot.gameboard.placeShip([0, 1], 5, "horizon");
  bot.gameboard.placeShip([2, 2], 4, "horizon");
  bot.gameboard.placeShip([4, 3], 3, "horizon");
  bot.gameboard.placeShip([6, 0], 2, "horizon");
  bot.gameboard.placeShip([9, 5], 2, "horizon");
  bot.gameboard.placeShip([6, 7], 1, "horizon");
  bot.gameboard.placeShip([8, 8], 1, "horizon");

  drawPlayerBoard(human);
  drawBotBoard(bot, human);


})

function didAnyoneWin(human, bot) {
  if (bot.gameboard.allShipsSunk()) {
    return console.log("You've sunk all enemy ships! Congratulations!");
  } else if (human.gameboard.allShipsSunk()) {
    return console.log("You've lost the fight, but the war is not over yet...");
  }
  return false;
}

export { didAnyoneWin };