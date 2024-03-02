let shipsToPlace = [];
let direction = "horizon";
let mouseoverLen = [0, 0];
let mouseoverPos = [];
let overed = false;

function didAnyoneWin(bot, player) {
  if (bot.gameboard.allShipsSunk()) {
    return "win";
  } else if (player.gameboard.allShipsSunk()) {
    return "lose";
  }
  return false;
}

function createGameboardsDiv() {
  const gameboards = document.createElement("div");
  gameboards.classList.add("gameboards");
  document.querySelector("body").append(gameboards);
  shipsToPlace.push(1, 1, 2, 2, 3, 4, 5);
}

function redraw(who, bot, player) {
  if (shipsToPlace.length === 0 && didAnyoneWin(bot, player) === "win")
    return gameoverScreen(true);
  if (shipsToPlace.length === 0 && didAnyoneWin(bot, player) === "lose")
    return gameoverScreen(false);

  if (who === "bot") {
    document.querySelector(".truebot").remove();
    drawBotBoard(bot, player);
  } else {
    document.querySelector(".falsebot").remove();
    drawPlayerBoard(player, bot);
  }
}

function drawPlayerBoard(player, bot) {
  const board = document.createElement("table");
  const title = document.createElement("h2");
  title.innerText = "You";
  board.append(title);
  board.classList.add("falsebot");

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = createPlayerCell(i, j, player, bot);
      row.append(cell);
    }
    board.append(row);
  }
  if (shipsToPlace.length !== 0) board.append(...showShipPlacementButtons());

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
      const cell = createBotCell(i, j, player, bot);
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

function gameoverScreen(playerWon) {
  document.querySelector(".gameboards").remove();
  const winScreen = document.createElement("h1");
  winScreen.classList.add("gameoverScreen");
  if (playerWon) {
    winScreen.innerText =
      "You've sunk all enemy ships! Congratulations! Refresh the page to start over.";
  } else {
    winScreen.innerText =
      "You've lost the fight, but the war is not over yet... Refresh the page to start over.";
  }
  document.querySelector("body").append(winScreen);
}

function showShipPlacementButtons() {
  const startText = document.createElement("h1");
  startText.innerText = "Place your ships to start the game";
  startText.classList.add("startText");
  const vertical = document.createElement("button");
  vertical.innerText = "Vertical";
  vertical.classList.add("placementButton", "vertical");
  vertical.addEventListener("click", () => {
    direction = "vertical";
  });
  const horizontal = document.createElement("button");
  horizontal.innerText = "Horizontal";
  horizontal.classList.add("placementButton", "horizontal");
  horizontal.addEventListener("click", () => {
    direction = "horizon";
  });
  return [startText, vertical, horizontal];
}

function shipPlacementPreview(i, j) {
  if (mouseoverLen[1] > 0 && i == mouseoverPos[0] && j >= mouseoverPos[1]) {
    mouseoverLen[1] -= 1;
    return true;
  } else if (
    mouseoverLen[0] > 0 &&
    i >= mouseoverPos[0] &&
    j == mouseoverPos[1]
  ) {
    mouseoverLen[0] -= 1;
    return true;
  }
  return false;
}

function handleCellHover(i, j, currShipToPlaceLen, player, bot) {
  overed = true;
  mouseoverPos.push(i, j);
  if (direction === "horizon") {
    mouseoverLen[1] = currShipToPlaceLen;
  } else {
    mouseoverLen[0] = currShipToPlaceLen;
  }
  redraw("player", bot, player);
}

function handleCellUnhover(player, bot) {
  mouseoverPos = [];
  mouseoverLen = [0, 0];
  overed = false;
  redraw("player", bot, player);
}

function handleCellClick(i, j, currShipToPlaceLen, bot, player) {
  if (
    player.gameboard.placeShip([i, j], currShipToPlaceLen, direction) !== false
  ) {
    shipsToPlace.pop();
  }
  redraw("player", bot, player);
  redraw("bot", bot, player);
}

function createPlayerCell(i, j, player, bot) {
  const cell = document.createElement("td");
  cell.innerText = wordToIcon(player.gameboard.map[i][j]);
  cell.classList.add(player.gameboard.map[i][j]);

  // this section is for when player hasn't placed ships yet
  if (shipsToPlace !== 0) {
    handleShipPlacement(
      i,
      j,
      player,
      bot,
      shipsToPlace[shipsToPlace.length - 1],
      cell
    );
  }
  return cell;
}

function createBotCell(i, j, player, bot) {
  const cell = document.createElement("td");
  if (bot.gameboard.map[i][j] !== "ship") {
    cell.innerText = wordToIcon(bot.gameboard.map[i][j]);
    cell.classList.add(bot.gameboard.map[i][j]);
  }
  if (shipsToPlace.length === 0) {
    cell.addEventListener("click", () => {
      setTimeout(() => {
        if (player.turn && player.humanTurn(bot.gameboard, i, j)) {
          [player.turn, bot.turn] = [false, true];
          redraw("bot", bot, player);
        }
      }, 200);
    });
  }
  if (bot.turn) {
    bot.botTurn(player.gameboard);
    [player.turn, bot.turn] = [true, false];
    redraw("player", bot, player);
  }
  return cell;
}

function handleShipPlacement(i, j, player, bot, currShipToPlaceLen, cell) {
  if (!overed) {
    cell.addEventListener("mouseenter", () => {
      handleCellHover(i, j, currShipToPlaceLen, player, bot);
    });
  } else {
    if (shipPlacementPreview(i, j)) cell.innerText = "🚢";
    cell.addEventListener("mouseout", () => {
      handleCellUnhover(player, bot);
    });
  }
  cell.addEventListener("click", () => {
    handleCellClick(i, j, currShipToPlaceLen, bot, player);
  });
}
export { drawPlayerBoard, drawBotBoard, createGameboardsDiv };
