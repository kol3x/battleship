import { Gameboard } from "./gameboard";

class Player {
  constructor(turn, isBot) {
    this.gameboard = new Gameboard();
    this.turn = turn;
    this.isBot = isBot;
  }
  botTurn(playerGameboard) {
    let x;
    let y;
    do {
      y = Math.floor(Math.random() * 10);
      x = Math.floor(Math.random() * 10);
    } while (playerGameboard.receiveAttack([y, x]) === false);
  }

  humanTurn(botGameboard, y, x) {
    if (botGameboard.receiveAttack([y, x])) {
      return true;
    } else {
      return false;
    }
  }
}

export { Player };
