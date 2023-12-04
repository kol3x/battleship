import { didAnyoneWin } from "./gameloop";

let shipsToPlace = [];
let direction = "horizon";
let mouseoverLen = [0, 0];
let mouseoverPos = [];
let overed = false;

function createGameboardsDiv() {
  const gameboards = document.createElement("div");
  gameboards.classList.add("gameboards");
  document.querySelector("body").append(gameboards);
  shipsToPlace.push(1, 1, 2, 2, 3, 4, 5);
}

function redraw(who, bot, player) {
  if (who === "bot") {
    document.querySelector(".truebot").remove();
    drawBotBoard(bot, player);
  } else {
    document.querySelector(".falsebot").remove();
    drawPlayerBoard(player, bot);
  }
}

function drawPlayerBoard(player, bot) {
  console.log("render");
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
      cell.classList.add(player.gameboard.map[i][j]);

      // this section is for when player hasn't places ships yet
      if (shipsToPlace !== 0) {
        if (
          mouseoverLen[1] > 0 &&
          i == mouseoverPos[0] &&
          j >= mouseoverPos[1]
        ) {
          console.log(mouseoverLen, mouseoverPos);
          cell.innerText = "🚢";
          mouseoverLen[1] -= 1;
        } else if (
          mouseoverLen[0] > 0 &&
          i >= mouseoverPos[0] &&
          j == mouseoverPos[1]
        ) {
          cell.innerText = "🚢";

          mouseoverLen[0] -= 1;
        }
        if (!overed) {
          cell.addEventListener("mouseenter", () => {
            overed = true;
            mouseoverPos.push(i, j);
            if (direction === "horizon") {
              mouseoverLen = [0, shipsToPlace[shipsToPlace.length - 1]];
            } else {
              mouseoverLen = [shipsToPlace[shipsToPlace.length - 1], 0];
            }

            redraw("player", bot, player);
          });
        }
        if (overed) {
          cell.addEventListener("mouseout", () => {
            mouseoverPos = [];
            mouseoverLen = [0, 0];
            overed = false;
            // if (!cell.classList.contains("ship")) cell.innerText = "";
            redraw("player", bot, player);
          });
        }
        cell.addEventListener("click", () => {
          let currentShipToPlaceLen = shipsToPlace[shipsToPlace.length - 1];
          if (
            player.gameboard.placeShip(
              [i, j],
              currentShipToPlaceLen,
              direction
            ) !== false
          ) {
            shipsToPlace.pop();
          }
          redraw("player", bot, player);
        });
      }
      row.append(cell);
    }
    board.append(row);
  }
  if (shipsToPlace.length !== 0) {
    const vertical = document.createElement("button");
    vertical.innerText = "Vertical";
    vertical.addEventListener("click", () => {
      direction = "vertical";
    });
    const horizontal = document.createElement("button");
    horizontal.innerText = "Horizontal";
    horizontal.addEventListener("click", () => {
      direction = "horizon";
    });
    board.append(vertical, horizontal);
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
      if (bot.gameboard.map[i][j] !== "ship") {
        cell.innerText = wordToIcon(bot.gameboard.map[i][j]);
        cell.classList.add(bot.gameboard.map[i][j]);
      }
      cell.addEventListener("click", () => {
        setTimeout(() => {
          if (player.turn) {
            if (player.humanTurn(bot.gameboard, i, j) === false) return;
            [player.turn, bot.turn] = [false, true];
            redraw("bot", bot, player);
          }
        }, 200);
      });
      if (bot.turn) {
        bot.botTurn(player.gameboard);
        redraw("player", bot, player);
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
    return "🌊";
  } else if (cell === "hit") {
    return "💥";
  }
  return "";
}

// function gameoverScreen(isWin) {
//   if (shipsToPlace.length === 0 && gameOver) {
//     document.querySelector(".gameboards").remove();
//   }
// }

export { drawPlayerBoard, drawBotBoard, createGameboardsDiv };
