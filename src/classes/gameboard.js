import { Ship } from "./ship";

class Gameboard {
  constructor() {
    // null for empty, 'ship'] for ship, 'hit' for ship hit, 'miss' for miss
    this.map = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.ships = [];
  }
  log() {
    let cells = 0;
    this.map.forEach((row) => {
      row.forEach((cell) => {
        if (cell === "ship") cells += 1;
      });
    });
    console.log(cells);
    console.log(this.map);
  }

  placeShip(cords, len, direction) {
    let y = cords[0];
    let x = cords[1];

    let ship = new Ship(len);

    let yCheck = cords[0];
    let xCheck = cords[1];
    for (let i = 0; i < len; i++) {
      // so you can't place 2 adjacent ships or go off the edge
      if (xCheck < 0 || xCheck > 9 || yCheck < 0 || yCheck > 9) return false;
      if (this.adjacentShips(yCheck, xCheck)) return false;
      // so you can't place 2 ships in the same cell
      if (this.map[y][x] === "ship") return false;
      if (direction === "horizon") {
        xCheck += 1;
      } else {
        yCheck += 1;
      }
    }

    for (let i = 0; i < len; i++) {
      ship.cords.push([y, x]);
      this.map[y][x] = "ship";
      if (direction === "horizon") {
        x += 1;
      } else {
        y += 1;
      }
    }
    this.ships.push(ship);
    return true;
  }

  randomPlaceShip(len) {
    while (true) {
      const direction = Math.random() >= 0.5 ? "horizon" : "vertical";
      const [y, x] = [
        Math.round(Math.random() * 10),
        Math.round(Math.random() * 10),
      ];
      if (this.placeShip([y, x], len, direction) !== false) return;
    }
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].cords.length; j++) {
        const [y, x] = this.ships[i].cords[j];
        if (this.map[y][x] === "ship") return false;
      }
    }
    return true;
  }

  receiveAttack(cords) {
    let y = cords[0];
    let x = cords[1];

    switch (this.map[y][x]) {
      case null:
        this.map[y][x] = "miss";
        return true;
      case "ship":
        this.map[y][x] = "hit";
        for (let i = 0; i < this.ships.length; i++) {
          if (
            this.ships[i].cords.find(
              (el) => el[0] === cords[0] && el[1] === cords[1]
            ) !== undefined
          )
            this.ships[i].hit();
          return true;
        }
      case "hit":
      case "miss":
        return false;
    }
  }

  adjacentShips(y, x) {
    if (
      (y !== 0 && this.map[y - 1][x] === "ship") ||
      (x !== 0 && this.map[y][x - 1] === "ship") ||
      (y !== 9 && this.map[y + 1][x] === "ship") ||
      (x !== 9 && this.map[y][x + 1] === "ship")
    )
      return true;

    if (
      (y !== 0 && x !== 0 && this.map[y - 1][x - 1] === "ship") ||
      (y !== 0 && x !== 9 && this.map[y - 1][x + 1] === "ship") ||
      (y !== 9 && x !== 0 && this.map[y + 1][x - 1] === "ship") ||
      (y !== 9 && x !== 9 && this.map[y + 1][x + 1] === "ship")
    )
      return true;

    return false;
  }
}

export { Gameboard };
