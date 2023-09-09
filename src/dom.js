import { didAnyoneWin } from "./gameloop";

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
      cell.innerText = player.gameboard.map[i][j];
      row.append(cell);
    }
    board.append(row);
  }
  document.querySelector("body").append(board);
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
      if (bot.gameboard.map[i][j] !== 'ship') cell.innerText = bot.gameboard.map[i][j];
      cell.addEventListener("click", () => {
        if (player.turn) {
          if (player.humanTurn(bot.gameboard, i, j) === false) return;
          document.querySelector(".truebot").remove();
          bot.turn = true;
          player.turn = false;
          drawBotBoard(bot, player);
        }
      });
      if (bot.turn) {
        bot.botTurn(player.gameboard);
        document.querySelector(".falsebot").remove();
        drawPlayerBoard(player, bot);
        player.turn = !player.turn;
        bot.turn = !bot.turn;
      }

      row.append(cell);
    }
    board.append(row);
  }
  document.querySelector("body").append(board);
  didAnyoneWin(player, bot);
}

export { drawPlayerBoard, drawBotBoard };
