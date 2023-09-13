import { Ship } from "./ship";

class Gameboard {
  constructor() {
    // null for empty, 'ship'] for ship, 'hit' for ship hit, 'miss' for miss
    this.map = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.ships = [];
  }
  log() {
    console.log(this.map);
  }

  placeShip(cords, len, direction) {
    
    let cord = null;
    if (direction === "horizon") {
      cord = cords[1];
    } else {
      cord = cords[0];
    }
    // Make sure you can't place ship beyond edge
    if (10 - len - cord < 0) return false;

    let y = cords[0];
    let x = cords[1];

    let ship = new Ship(len);

    for (let i = 0; i < len; i++) {
      // so you can't place 2 ships in the same cell
      if (this.map[y][x] === "ship") return false;
      // so you can't place 2 adjacent ships
      if (adjacentShips(y, x, direction, i, this.map)) return false;

      ship.cords.push([y, x]);
      this.map[y][x] = "ship";
      if (direction === "horizon") {
        x += 1;
      } else {
        y += 1;
      }
    }
    this.ships.push(ship);
  }
  randomPlaceShip(len) {
    const directions = ["horizon", "vertical"];
    let direction;
    let cords;
    while (true) {
      let y = Math.floor(Math.random() * 10);
      let x = Math.floor(Math.random() * 10);
      cords = [y, x];
      direction = Math.random() >= 0.5 ? 1 : 0;
      if (this.placeShip(cords, len, directions[direction]) !== false) return;
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
}

function isCellValid(cell) {
  return cell !== null && cell !== undefined;
}

function adjacentShips(y, x, direction, iterable, map) {
  const toCheck = [-1, 1];

  if (iterable === 0) {
    for (let i = 0; i < 2; i++) {
      if (
        isCellValid(map[y + toCheck[i]]?.[x]) ||
        isCellValid(map[y]?.[x + toCheck[i]]) ||
        isCellValid(map[y + toCheck[i]]?.[x + toCheck[i]]) ||
        isCellValid(map[y - toCheck[i]]?.[x + toCheck[i]])
      ) {
        return true;
      }
    }
  } else if (direction === "horizon" && iterable > 0) {
    if (
      isCellValid(map[y - 1]?.[x + 1]) ||
      isCellValid(map[y]?.[x + 1]) ||
      isCellValid(map[y + 1]?.[x + 1])
    ) {
      return true;
    }
  } else if (direction === "vertical" && iterable > 0) {
    if (
      isCellValid(map[y + 1]?.[x - 1]) ||
      isCellValid(map[y + 1]?.[x]) ||
      isCellValid(map[y + 1]?.[x + 1])
    ) {
      return true;
    }
  }
  return false;
}

export { Gameboard };
