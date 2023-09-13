import { didAnyoneWin } from "./gameloop";

function createGameboardsDiv() {
  const gameboards = document.createElement("div");
  gameboards.classList.add("gameboards");
  document.querySelector("body").append(gameboards);
}

function drawPlayerBoard(player) {
  const board = document.createElement("table");
  const title = document.createElement("h2");

  title.innerText = "You";

  board.append(title);

  board.classList.add("falsebot");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
        cell.innerText = wordToIcon(player.gameboard.map[i][j]);
      row.append(cell);
    }
    board.append(row);
  }
  document.querySelector(".gameboards").append(board);
}

function drawBotBoard(bot, player) {
  const board = document.createElement("table");
  const title = document.createElement("h2");
  title.innerText = "Computer";
  board.append(title);
  board.classList.add("truebot");

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      if (bot.gameboard.map[i][j] !== "ship")
        cell.innerText = wordToIcon(bot.gameboard.map[i][j]);
      cell.addEventListener("click", () => {
        if (player.turn) {
          if (player.humanTurn(bot.gameboard, i, j) === false) return;
          document.querySelector(".truebot").remove();
          [player.turn, bot.turn] = [false, true];
          drawBotBoard(bot, player);
        }
      });
      if (bot.turn) {
        bot.botTurn(player.gameboard);
        document.querySelector(".falsebot").remove();
        drawPlayerBoard(player, bot);
        [player.turn, bot.turn] = [true, false];
      }

      row.append(cell);
    }
    board.append(row);
  }
  document.querySelector(".gameboards").append(board);
  didAnyoneWin(player, bot);
}

function wordToIcon(cell) {
  if (cell === "ship") {
    return "🚢";
  } else if (cell === "miss") {
    return "🌊"
  } else if (cell === "hit"){
     return "💥"
  }
  return "";
}

function gameoverScreen(isWin) {
  document.querySelector(".gameboards").remove();
  if (isWin) {
    
  }
}

export { drawPlayerBoard, drawBotBoard, createGameboardsDiv };
